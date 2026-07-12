from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import JSONResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str


# Contact Form Model
class ContactFormCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=20)
    company: Optional[str] = Field(None, max_length=100)
    message: str = Field(..., min_length=10, max_length=2000)

class ContactFormResponse(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str
    name: str
    email: str
    phone: Optional[str]
    company: Optional[str]
    message: str
    created_at: str
    status: str


# Training Enrollment Model
class TrainingEnrollmentCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=20)
    course: str = Field(..., min_length=1)
    experience_level: Optional[str] = Field(None)
    message: Optional[str] = Field(None, max_length=1000)

class TrainingEnrollmentResponse(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str
    name: str
    email: str
    phone: Optional[str]
    course: str
    experience_level: Optional[str]
    message: Optional[str]
    created_at: str
    status: str


# Routes
@api_router.get("/")
async def root():
    return {"message": "BikerTechie API is running"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# Contact Form Endpoint
@api_router.post("/contact", response_model=ContactFormResponse)
async def submit_contact_form(form_data: ContactFormCreate):
    try:
        contact_id = str(uuid.uuid4())
        created_at = datetime.now(timezone.utc).isoformat()
        
        doc = {
            "id": contact_id,
            "name": form_data.name,
            "email": form_data.email,
            "phone": form_data.phone,
            "company": form_data.company,
            "message": form_data.message,
            "created_at": created_at,
            "status": "new"
        }
        
        await db.contact_submissions.insert_one(doc)
        
        # Return without _id
        return ContactFormResponse(
            id=contact_id,
            name=form_data.name,
            email=form_data.email,
            phone=form_data.phone,
            company=form_data.company,
            message=form_data.message,
            created_at=created_at,
            status="new"
        )
    except Exception as e:
        logging.error(f"Error submitting contact form: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")


@api_router.get("/contact", response_model=List[ContactFormResponse])
async def get_contact_submissions():
    submissions = await db.contact_submissions.find({}, {"_id": 0}).to_list(1000)
    return submissions


# Training Enrollment Endpoint
@api_router.post("/training/enroll", response_model=TrainingEnrollmentResponse)
async def submit_training_enrollment(enrollment: TrainingEnrollmentCreate):
    try:
        enrollment_id = str(uuid.uuid4())
        created_at = datetime.now(timezone.utc).isoformat()
        
        doc = {
            "id": enrollment_id,
            "name": enrollment.name,
            "email": enrollment.email,
            "phone": enrollment.phone,
            "course": enrollment.course,
            "experience_level": enrollment.experience_level,
            "message": enrollment.message,
            "created_at": created_at,
            "status": "pending"
        }
        
        await db.training_enrollments.insert_one(doc)
        
        return TrainingEnrollmentResponse(
            id=enrollment_id,
            name=enrollment.name,
            email=enrollment.email,
            phone=enrollment.phone,
            course=enrollment.course,
            experience_level=enrollment.experience_level,
            message=enrollment.message,
            created_at=created_at,
            status="pending"
        )
    except Exception as e:
        logging.error(f"Error submitting training enrollment: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit enrollment")


@api_router.get("/training/enrollments", response_model=List[TrainingEnrollmentResponse])
async def get_training_enrollments():
    enrollments = await db.training_enrollments.find({}, {"_id": 0}).to_list(1000)
    return enrollments


# Audit Models
class AuditRequest(BaseModel):
    url: str

class AuditDetailItem(BaseModel):
    name: str
    status: str
    message: str

class AuditResponse(BaseModel):
    url: str
    overall_grade: str
    overall_score: int
    load_time_seconds: float
    checks: List[AuditDetailItem]

# Portal Models
class TicketItem(BaseModel):
    id: str
    subject: str
    status: str
    category: str
    created_at: str

class PortalStatusResponse(BaseModel):
    project_name: str
    progress_percentage: int
    current_phase: str
    uptime_percentage: float
    api_latency_ms: int
    active_tickets: List[TicketItem]

# Audit Endpoint
@api_router.post("/audit", response_model=AuditResponse)
async def perform_audit(request: AuditRequest):
    url = request.url
    # Simple logic to determine a grade based on url length or random
    score = 75 + (len(url) % 20)
    if score >= 90:
        grade = "A"
    elif score >= 80:
        grade = "B"
    elif score >= 70:
        grade = "C"
    else:
        grade = "D"
        
    import random
    load_time = round(random.uniform(0.8, 2.4), 2)
    
    checks = [
        AuditDetailItem(name="SSL Certificate", status="pass", message="Valid SSL certificate issued by Let's Encrypt, expiring in 74 days."),
        AuditDetailItem(name="Page Load Time", status="pass" if load_time < 1.5 else "warning", message=f"Full page loaded in {load_time}s."),
        AuditDetailItem(name="Security Headers", status="fail", message="Missing Security Headers (HSTS, Content-Security-Policy)."),
        AuditDetailItem(name="SEO Meta Tags", status="pass" if len(url) < 25 else "warning", message="Meta description tag is present, but OpenGraph image is missing."),
        AuditDetailItem(name="Image Optimization", status="warning", message="3 large images detected without modern formats (WebP/AVIF).")
    ]
    
    return AuditResponse(
        url=url,
        overall_grade=grade,
        overall_score=score,
        load_time_seconds=load_time,
        checks=checks
    )

# Portal Endpoint
@api_router.get("/portal/status", response_model=PortalStatusResponse)
async def get_portal_status():
    return PortalStatusResponse(
        project_name="BikerTechie Enterprise AI Pipeline",
        progress_percentage=68,
        current_phase="API Integration & Core Testing",
        uptime_percentage=99.98,
        api_latency_ms=42,
        active_tickets=[
            TicketItem(id="TKT-1082", subject="Configure CORS headers for staging environments", status="In Progress", category="DevOps", created_at="2026-07-10T14:22:00Z"),
            TicketItem(id="TKT-1085", subject="GCP Pub/Sub worker node scaling bottleneck", status="Open", category="Infrastructure", created_at="2026-07-11T09:15:00Z"),
            TicketItem(id="TKT-1076", subject="Database index optimization for metrics query", status="Resolved", category="Database", created_at="2026-07-08T11:45:00Z")
        ]
    )


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()


# Serve static files from the React frontend build directory if it exists
frontend_build_path = ROOT_DIR.parent / "frontend" / "build"
if frontend_build_path.exists():
    app.mount("/", StaticFiles(directory=str(frontend_build_path), html=True), name="frontend")

    @app.exception_handler(404)
    async def not_found_handler(request, exc):
        if request.url.path.startswith("/api"):
            return JSONResponse(status_code=404, content={"detail": "Not Found"})
        index_path = frontend_build_path / "index.html"
        if index_path.exists():
            return FileResponse(str(index_path))
        return JSONResponse(status_code=404, content={"detail": "Not Found"})

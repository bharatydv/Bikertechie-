# ==========================================
# Stage 1: Build the React frontend
# ==========================================
FROM node:18-alpine AS frontend-builder
WORKDIR /app/frontend

# Copy dependencies list
COPY frontend/package.json frontend/yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy frontend source code
COPY frontend/ ./

# Build frontend to build/ directory
RUN yarn build

# ==========================================
# Stage 2: Create the production container
# ==========================================
FROM python:3.11-slim AS production

# Set environment variables
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PORT=8080

WORKDIR /app

# Copy requirements and install dependencies
COPY backend/requirements.txt ./backend/requirements.txt
RUN pip install --no-cache-dir -r backend/requirements.txt

# Copy backend source code
COPY backend/ ./backend/

# Copy built frontend assets from Stage 1
COPY --from=frontend-builder /app/frontend/build ./frontend/build

# Expose port
EXPOSE 8080

# Command to run backend server
CMD ["sh", "-c", "uvicorn backend.server:app --host 0.0.0.0 --port ${PORT}"]

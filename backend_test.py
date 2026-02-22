import requests
import sys
import json
from datetime import datetime

class BikerTechieAPITester:
    def __init__(self, base_url="https://enterprise-growth-ai.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=30)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=30)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                except:
                    print(f"   Response: {response.text[:200]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:300]}")
                self.failed_tests.append({
                    'test': name,
                    'expected': expected_status,
                    'actual': response.status_code,
                    'endpoint': endpoint
                })

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                'test': name,
                'error': str(e),
                'endpoint': endpoint
            })
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        return self.run_test(
            "Root API endpoint",
            "GET",
            "api/",
            200
        )

    def test_contact_form_submission(self):
        """Test contact form submission"""
        test_data = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "+91 9876543210",
            "company": "Test Company",
            "message": "This is a test message for BikerTechie contact form submission."
        }
        
        return self.run_test(
            "Contact Form Submission",
            "POST",
            "api/contact",
            200,
            data=test_data
        )

    def test_contact_form_validation(self):
        """Test contact form with invalid data"""
        invalid_data = {
            "name": "",
            "email": "invalid-email",
            "message": "short"
        }
        
        success, response = self.run_test(
            "Contact Form Validation (Invalid Data)",
            "POST",
            "api/contact",
            422,  # Expecting validation error
            data=invalid_data
        )
        return success

    def test_get_contact_submissions(self):
        """Test retrieving contact submissions"""
        return self.run_test(
            "Get Contact Submissions",
            "GET",
            "api/contact",
            200
        )

    def test_training_enrollment(self):
        """Test training enrollment submission"""
        test_data = {
            "name": "Test Student",
            "email": "student@example.com",
            "phone": "+91 9876543210",
            "course": "cloud-foundations",
            "experience_level": "beginner",
            "message": "I'm interested in learning cloud fundamentals."
        }
        
        return self.run_test(
            "Training Enrollment Submission",
            "POST",
            "api/training/enroll",
            200,
            data=test_data
        )

    def test_training_enrollment_validation(self):
        """Test training enrollment with invalid data"""
        invalid_data = {
            "name": "",
            "email": "invalid-email",
            "course": ""
        }
        
        return self.run_test(
            "Training Enrollment Validation (Invalid Data)",
            "POST",
            "api/training/enroll",
            422,  # Expecting validation error
            data=invalid_data
        )

    def test_get_training_enrollments(self):
        """Test retrieving training enrollments"""
        return self.run_test(
            "Get Training Enrollments",
            "GET",
            "api/training/enrollments",
            200
        )

    def test_status_check_creation(self):
        """Test status check creation"""
        test_data = {
            "client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"
        }
        
        return self.run_test(
            "Status Check Creation",
            "POST",
            "api/status",
            200,
            data=test_data
        )

    def test_get_status_checks(self):
        """Test retrieving status checks"""
        return self.run_test(
            "Get Status Checks",
            "GET",
            "api/status",
            200
        )

def main():
    print("🚀 Starting BikerTechie API Testing...")
    print("=" * 60)
    
    # Setup
    tester = BikerTechieAPITester()
    
    # Run all tests
    print("\n📋 Running Backend API Tests...")
    
    # Basic API tests
    tester.test_root_endpoint()
    
    # Contact form tests
    tester.test_contact_form_submission()
    tester.test_contact_form_validation()
    tester.test_get_contact_submissions()
    
    # Training enrollment tests
    tester.test_training_enrollment()
    tester.test_training_enrollment_validation()
    tester.test_get_training_enrollments()
    
    # Status check tests
    tester.test_status_check_creation()
    tester.test_get_status_checks()
    
    # Print final results
    print("\n" + "=" * 60)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.failed_tests:
        print("\n❌ Failed Tests:")
        for failed in tester.failed_tests:
            print(f"   - {failed['test']}")
            if 'error' in failed:
                print(f"     Error: {failed['error']}")
            else:
                print(f"     Expected: {failed['expected']}, Got: {failed['actual']}")
    
    success_rate = (tester.tests_passed / tester.tests_run) * 100
    print(f"\n✨ Success Rate: {success_rate:.1f}%")
    
    return 0 if success_rate >= 80 else 1

if __name__ == "__main__":
    sys.exit(main())
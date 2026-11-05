Docker CI/CD Pipeline with Jenkins and SonarQube

Project Overview

This project demonstrates an automated CI/CD pipeline using Jenkins, Docker, GitHub, and SonarQube.

Technologies Used

- GitHub – Source Code Management
- Jenkins – CI/CD Automation
- Docker – Containerization
- SonarQube – Code Quality and Security Analysis
- Node.js – Application Runtime
- Ubuntu – Operating System

Project Structure

docker-ci-cd/
├── Dockerfile
├── Jenkinsfile
├── package.json
├── server.js
└── README.md

Pipeline Stages

1. Checkout – Retrieves the source code.
2. SonarQube Analysis – Analyzes code quality and security.
3. Build Docker Image – Builds the application image.
4. Deploy Container – Runs the application container.
5. Verify Deployment – Checks application availability.

SonarQube Configuration

- Project Name: docker-ci-cd
- Project Key: docker-ci-cd
- Quality Gate: Passed
- Security Issues: 0

Application Verification

Application URL:
"http://localhost:3001"

Verification command:

curl http://localhost:3001

Expected response:

Docker CI/CD Application is running!

Conclusion

This project demonstrates automated code analysis, Docker image creation, application deployment, and verification through a Jenkins CI/CD pipeline.

GitHub Repository

https://github.com/sunil18-droid/docker-ci-cd

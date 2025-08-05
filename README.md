# Node.js DevOps App

This is a simple Node.js + Express web application containerized with Docker, deployed using Kubernetes, and automated using GitHub Actions.

## Features
- Express server with a single route
- Dockerized
- GitHub Actions CI/CD pipeline
- Kubernetes deployment and service

## Setup Instructions

1. Build Docker image:
   ```bash
   docker build -t yourdockerhubusername/node-devops-app .
   ```

2. Push to DockerHub:
   ```bash
   docker push yourdockerhubusername/node-devops-app
   ```

3. Deploy to Kubernetes:
   ```bash
   kubectl apply -f k8s/
   ```

4. Access the service using LoadBalancer IP or via port-forwarding.

5. GitHub Actions will automate build & push on code commits to main.
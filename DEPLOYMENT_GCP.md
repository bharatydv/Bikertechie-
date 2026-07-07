# BikerTechie - GCP Cloud Run Deployment Guide

This guide describes how to deploy the application on Google Cloud Platform (GCP) using **Cloud Run**. Cloud Run runs the application in a fully managed serverless container environment.

## Prerequisites

1. A **Google Cloud Project** with billing enabled.
2. The [Google Cloud CLI (gcloud)](https://cloud.google.com/sdk/gcloud) installed and authenticated on your local machine.
3. [Docker](https://www.docker.com/) installed and running locally to build the container.
4. A **MongoDB connection string**. It is recommended to use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free tier is sufficient).

---

## Step 1: Initialize gcloud CLI

Log in to your Google Cloud account and set your active project:

```bash
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
```

Enable the necessary APIs for Cloud Run and Container/Artifact Registry:

```bash
gcloud services enable run.googleapis.com artifactregistry.googleapis.com
```

---

## Step 2: Create Artifact Registry Repository

Create a Docker repository in Artifact Registry to store your container image:

```bash
gcloud artifacts repositories create bikertechie-repo \
    --repository-format=docker \
    --location=us-central1 \
    --description="Docker repository for BikerTechie"
```

Configure Docker to authenticate with Google Artifact Registry:

```bash
gcloud auth configure-docker us-central1-docker.pkg.dev
```

---

## Step 3: Build and Push the Container Image

Build your Docker container image locally:

```bash
docker build -t us-central1-docker.pkg.dev/YOUR_PROJECT_ID/bikertechie-repo/app:latest .
```

Push the built image to Google Artifact Registry:

```bash
docker push us-central1-docker.pkg.dev/YOUR_PROJECT_ID/bikertechie-repo/app:latest
```

---

## Step 4: Deploy to GCP Cloud Run

Deploy the container image to Google Cloud Run. Replace `<MONGO_URL_HERE>` with your actual MongoDB connection string (e.g. from MongoDB Atlas):

```bash
gcloud run deploy bikertechie \
    --image=us-central1-docker.pkg.dev/YOUR_PROJECT_ID/bikertechie-repo/app:latest \
    --platform=managed \
    --region=us-central1 \
    --allow-unauthenticated \
    --set-env-vars="MONGO_URL=<MONGO_URL_HERE>,DB_NAME=bikertechie"
```

Once the deployment completes, the terminal will display the live URL of your deployed application (e.g., `https://bikertechie-xxxxxx-uc.a.run.app`).

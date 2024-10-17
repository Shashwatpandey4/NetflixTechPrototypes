# Annotation Service API

This document provides an overview of the API endpoints available in the Annotation Service. The API is built using FastAPI and follows RESTful conventions to manage annotations for media content, such as movies. It allows users to create, retrieve, update, and delete annotations, supporting both temporal and spatial data.

## Base URL
The base URL for all API endpoints is:
```
http://localhost:8000/api/v1
```

## Endpoints

### 1. Create Annotation
**POST** `/annotations/`

Create a new annotation.

#### Request Body
```json
{
  "user_id": "UUID",
  "label": "string",
  "movie_id": "string",
  "temporal": {
    "start_time": 0,
    "end_time": 120
  },
  "spatial": {
    "bounding_box": {
      "x": 0,
      "y": 0,
      "width": 100,
      "height": 100
    }
  }
}
```

#### Example Usage
```bash
curl -X POST "http://localhost:8000/api/v1/annotations/" \
-H "Content-Type: application/json" \
-d '{
  "user_id": "123e4567-e89b-12d3-a456-426614174000",
  "label": "shower curtain",
  "movie_id": "movie_123",
  "temporal": {
    "start_time": 10,
    "end_time": 30
  },
  "spatial": {
    "bounding_box": {
      "x": 50,
      "y": 50,
      "width": 200,
      "height": 150
    }
  }
}'
```

### 2. Get Annotations
**GET** `/annotations/`

Retrieve all annotations or filter by `user_id` or `movie_id`.

#### Query Parameters
- `user_id` (optional): UUID of the user.
- `movie_id` (optional): ID of the movie.

#### Example Usage
```bash
curl -X GET "http://localhost:8000/api/v1/annotations/?movie_id=movie_123"
```

### 3. Update Annotation
**PUT** `/annotations/{annotation_id}`

Update an existing annotation.

#### Path Parameters
- `annotation_id`: ID of the annotation to update.

#### Request Body
```json
{
  "label": "updated_label",
  "temporal": {
    "start_time": 0,
    "end_time": 120
  },
  "spatial": {
    "bounding_box": {
      "x": 0,
      "y": 0,
      "width": 150,
      "height": 150
    }
  }
}
```

#### Example Usage
```bash
curl -X PUT "http://localhost:8000/api/v1/annotations/annotation_123" \
-H "Content-Type: application/json" \
-d '{
  "label": "updated shower curtain",
  "temporal": {
    "start_time": 15,
    "end_time": 35
  },
  "spatial": {
    "bounding_box": {
      "x": 60,
      "y": 60,
      "width": 220,
      "height": 170
    }
  }
}'
```

### 4. Delete Annotation
**DELETE** `/annotations/{annotation_id}`

Delete an existing annotation.

#### Path Parameters
- `annotation_id`: ID of the annotation to delete.

#### Example Usage
```bash
curl -X DELETE "http://localhost:8000/api/v1/annotations/annotation_123"
```

## Response Format
All responses from the API will be in JSON format, with appropriate HTTP status codes. For example:

- `201 Created` for successful creation. 
- `200 OK` for successful retrieval or update. 
- `204 No Content` for successful deletion. 
- `400 Bad Request` for invalid requests (e.g., missing required fields). 
- `404 Not Found` for non-existent resources.

### Example Error Response
```json
{
  "detail": "Annotation not found"
}
```

## Running the API
To run the API, use the following command:
```bash
uvicorn main:app --reload
```
Make sure to replace `main:app` with the appropriate module and application name if different.



## To-Do

### Securing the API
- [ ] **Implement OAuth2 for user authentication:**
  - [ ] Research and select an OAuth2 library (e.g., **Authlib**, **FastAPI Users**).
  - [ ] Set up an authorization server to issue access tokens.
  - [ ] Create endpoints for user registration, login, and token refresh.
  - [ ] Secure sensitive routes using OAuth2 scopes.

- [ ] **Define and implement Role-Based Access Control (RBAC):**
  - [ ] Define user roles (e.g., admin, user, viewer) and their permissions.
  - [ ] Create a middleware to enforce RBAC checks on relevant endpoints.
  - [ ] Document role permissions in the README for clarity.

- [ ] **Enforce HTTPS:**
  - [ ] Obtain an SSL certificate (e.g., via **Let's Encrypt**).
  - [ ] Configure the FastAPI application to serve traffic over HTTPS.
  - [ ] Redirect HTTP traffic to HTTPS to ensure secure connections.

- [ ] **Use encryption for sensitive data in the database:**
  - [ ] Select a database encryption library (e.g., **Fernet**, **SQLCipher**).
  - [ ] Implement encryption for user data before storing it in the database.
  - [ ] Document the encryption keys and their management securely.

- [ ] **Validate and sanitize user inputs:**
  - [ ] Implement input validation using **Pydantic** models.
  - [ ] Add checks for SQL injection, XSS, and CSRF vulnerabilities.
  - [ ] Write unit tests to ensure input validation works correctly.

- [ ] **Implement rate limiting:**
  - [ ] Use a library like **slowapi** or **ratelimit** for rate limiting.
  - [ ] Configure the rate limit (e.g., 100 requests per hour per IP).
  - [ ] Create a response format for rate-limiting errors.

- [ ] **Set up activity logging:**
  - [ ] Use **Python's logging** library to log user actions.
  - [ ] Log API requests, responses, and errors with timestamps.
  - [ ] Implement a log rotation strategy to manage log sizes.

- [ ] **Use monitoring tools:**
  - [ ] Set up **Prometheus** to collect metrics from the API.
  - [ ] Install and configure **Grafana** to visualize API performance metrics.
  - [ ] Create dashboards to monitor key performance indicators (KPIs).

- [ ] **Regularly perform security audits:**
  - [ ] Schedule quarterly security audits and vulnerability scans.
  - [ ] Use tools like **OWASP ZAP** or **Burp Suite** for security testing.
  - [ ] Document findings and remediation steps.

- [ ] **Keep dependencies updated:**
  - [ ] Use **pip-audit** or **safety** to scan for vulnerable dependencies.
  - [ ] Regularly check for updates to libraries and frameworks.
  - [ ] Update the requirements file and test after each update.

### Making the API Robust and Scalable
- [ ] **Break the application into microservices:**
  - [ ] Identify independent components in the application (e.g., annotation service, user service).
  - [ ] Create a plan for transitioning to a microservices architecture.
  - [ ] Set up communication between services using **REST** or **gRPC**.

- [ ] **Implement load balancing:**
  - [ ] Configure **Nginx** or **HAProxy** as a load balancer for API instances.
  - [ ] Set up multiple instances of the API application to handle traffic.
  - [ ] Test load balancing by simulating traffic.

- [ ] **Implement caching strategies:**
  - [ ] Set up **Redis** or **Memcached** as a caching layer.
  - [ ] Identify cacheable API responses and implement caching logic.
  - [ ] Monitor cache hit/miss rates and optimize accordingly.

- [ ] **Use database sharding:**
  - [ ] Research sharding strategies suitable for the database (e.g., key-based sharding).
  - [ ] Implement sharding logic in the database layer.
  - [ ] Test sharding for performance improvements.

- [ ] **Implement read replicas:**
  - [ ] Set up read replicas for the database to distribute read load.
  - [ ] Configure the API to route read requests to replicas.
  - [ ] Monitor replica performance and synchronization.

- [ ] **Implement comprehensive error handling:**
  - [ ] Create a global exception handler to catch unhandled exceptions.
  - [ ] Return standardized error responses with appropriate status codes.
  - [ ] Log errors for further investigation.

- [ ] **Use circuit breakers:**
  - [ ] Implement a circuit breaker pattern using libraries like **pybreaker**.
  - [ ] Define thresholds for when to trip the circuit breaker.
  - [ ] Monitor circuit breaker status and recovery.

- [ ] **Implement health check endpoints:**
  - [ ] Create a `/health` endpoint that returns the health status of the API.
  - [ ] Include checks for database connectivity and service dependencies.
  - [ ] Monitor the health status in a monitoring dashboard.

### Testing Robustness and Scalability
- [ ] **Implement load testing:**
  - [ ] Set up **Apache JMeter** or **Locust** for load testing.
  - [ ] Create test scenarios simulating concurrent users and various requests.
  - [ ] Analyze load test results and identify bottlenecks.

- [ ] **Conduct stress tests:**
  - [ ] Simulate peak load conditions to find breaking points.
  - [ ] Monitor system metrics (CPU, memory, response time) during stress tests.
  - [ ] Document findings and plan for scaling.

- [ ] **Write comprehensive unit and integration tests:**
  - [ ] Use **pytest** or **unittest** to write tests for each API endpoint.
  - [ ] Test both successful and error scenarios.
  - [ ] Integrate testing into the CI/CD pipeline.

- [ ] **Use Application Performance Monitoring (APM) tools:**
  - [ ] Set up **New Relic** or **Datadog** for APM.
  - [ ] Monitor application performance metrics, such as response times and error rates.
  - [ ] Set alerts for performance degradation or downtime.

- [ ] **Analyze logs for patterns:**
  - [ ] Set up log aggregation using tools like **ELK stack** (Elasticsearch, Logstash, Kibana).
  - [ ] Create dashboards to visualize log data.
  - [ ] Identify recurring issues and optimize based on insights.

- [ ] **Conduct user acceptance testing (UAT):**
  - [ ] Invite real users to test the API and provide feedback.
  - [ ] Collect feedback on performance, usability, and feature completeness.
  - [ ] Iterate on changes based on user input.

- [ ] **Iterate and improve based on feedback:**
  - [ ] Document changes made based on testing and user feedback.
  - [ ] Schedule regular reviews to assess API performance and scalability.
  - [ ] Create a backlog for future improvements based on analysis.


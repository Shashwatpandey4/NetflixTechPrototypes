# Scalable Annotation service

## User Workflow

1. **Authentication**:
   - Users sign up or sign in using their Google or GitHub accounts.

2. **Workspace**:
   - After authentication, users are redirected to their workspace, where they can view existing projects and start new ones.

3. **Create New Project**:
   - Users click on the "Create New Project" button, enter a name for the project, and upload a media file (image or video).

4. **Start Annotations**:
   - After uploading the media, users click the "Start Annotations" button to begin the annotation process.

5. **Automatic Annotations**:
   - The application automatically generates bounding boxes over the media with corresponding labels (e.g., "man in a blue shirt").

6. **Review Annotations**:
   - Users can:
     - Accept each individual annotation.
     - Click "Accept All" to approve all annotations at once.
     - Select a specific bounding box to modify its annotation label after review.

7. **Export Data**:
   - After reviewing and accepting the annotations, users can save the annotated data as a JSON file associated with the media.

---

## Front-End Pages

1. **Login Page**:
   - Authentication through Google or GitHub.
   - Redirect to the workspace upon successful login.

2. **Workspace Page**:
   - Display a list of existing annotation projects.
   - Button to create a new project.

3. **Create Project Page**:
   - Input fields for project name and media upload (image/video).
   - Button to start the annotation process.

4. **Annotation Interface Page**:
   - Display uploaded media with automatically generated bounding boxes.
   - Interface elements to accept, reject, or modify annotations.
   - Button to accept all annotations.

5. **Export Page**:
   - Option to download the annotated data as a JSON file.
   - Confirmation message upon successful export.

---

## Additional Features to be Implemented

- [ ] **User Profile Management**:
  - Allow users to view and edit their profile settings.

- [ ] **Project Management**:
  - Enable users to delete or rename projects.

- [ ] **Annotation History**:
  - Implement a feature to view previous annotations and revisions.

- [ ] **Search and Filter Functionality**:
  - Allow users to search for specific projects or annotations.

- [ ] **Error Handling**:
  - Provide user-friendly error messages for various scenarios (e.g., upload failures, network issues).

- [ ] **Accessibility Features**:
  - Ensure the application is accessible to users with disabilities.

- [ ] **Responsive Design**:
  - Optimize the UI for mobile and tablet devices.

- [ ] **User Feedback Mechanism**:
  - Implement a system for users to provide feedback on the application experience.

- [ ] **Documentation**:
  - Create comprehensive user documentation and tutorials for using the annotation service.


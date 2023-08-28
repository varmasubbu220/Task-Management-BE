


The task-related routes are defined in the taskRoutes.js file. 
These routes handle CRUD operations (Create, Read, Update, Delete) for tasks.
 They interact with the Task model to perform these operations.

GET /: Fetches all tasks from the database.
GET /:id: Fetches a specific task by its ID.
POST /: Creates a new task.
PUT /:id: Updates an existing task by its ID.
DELETE /:id: Deletes a task by its ID.
============================================================
The app.js file configures the main Express application.
CORS is used to handle Cross-Origin Resource Sharing, 
allowing specific origins (http://localhost:3000 and https://task-management-fe-lilac.vercel.app) to access the API.
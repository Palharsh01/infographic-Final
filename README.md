Infographic Screenshot Generator
This project is a full-stack web application designed to generate and download screenshots of infographics. The frontend is built with React and deployed on Vercel, while the backend is developed using Node.js and Express. The backend captures screenshots using an NPM package and serves them to the frontend.

🚀 Live Demo
Frontend (Vercel): https://infographic-final.vercel.app

GitHub Repository: https://github.com/Palharsh01/infographic-Final

🛠️ Features
User-friendly interface to view infographics.

"Take Screenshot" button to capture the current infographic view.

Backend service to process and return the screenshot image.
dev.to
+4
makeareadme.com
+4
reddit.com
+4

📦 Technologies Used
Frontend: React, HTML, CSS, JavaScript

Backend: Node.js, Express

Deployment: Vercel (Frontend), Render (Backend - Deployment Pending)

⚙️ Getting Started
Prerequisites
Node.js (v14 or above)

npm (v6 or above)

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/Palharsh01/infographic-Final.git
Navigate to the project directory:

bash
Copy
Edit
cd infographic-Final
Install frontend dependencies:

bash
Copy
Edit
cd frontend
npm install
Install backend dependencies:

bash
Copy
Edit
cd ../backend
npm install
🔧 Running the Application Locally
Start the backend server:

bash
Copy
Edit
cd backend
npm start
The backend server will start on http://localhost:5000.

Start the frontend development server:

bash
Copy
Edit
cd ../frontend
npm start
The frontend will start on http://localhost:3000.

🖼️ Usage
Open the frontend application in your browser: http://localhost:3000.

Navigate to the desired infographic.

Click on the "Take Screenshot" button.

The application will communicate with the backend to capture and download the screenshot.

🚧 Deployment Status
Frontend: Successfully deployed on Vercel and accessible here.

Backend: Fully functional locally. Deployment on Render is pending due to server-side issues. Efforts are ongoing to resolve these and deploy the backend service.

🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.

Create a new branch: git checkout -b feature/YourFeatureName.

Make your changes and commit them: git commit -m 'Add some feature'.

Push to the branch: git push origin feature/YourFeatureName.

Open a pull request.

📄 License
This project is licensed under the MIT License.
Real-Time Collaborative Text Editor

Overview
This is a real-time collaborative text editor built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.IO. It allows multiple users to edit the same document simultaneously, with changes reflected in real-time for all participants.

Features
Real-Time Editing: See changes from other users as they happen.

Rich Text Formatting: Includes basic formatting options like bold, italic, and underline.

Collaborator Avatars: See who else is currently viewing the document.

Dynamic Document Titles: Edit the document's title in real-time.

Tech Stack
Frontend: React

Backend: Node.js, Express

Real-Time Engine: Socket.IO

Database: MongoDB (for future document storage)

Prerequisites
Before you begin, ensure you have the following installed:

Node.js (which includes npm)

MongoDB

Installation & Setup
Backend
Navigate to the backend directory:

cd backend

Install dependencies:

npm install

Start the server:

npm start

The backend will be running at http://localhost:3001.

Frontend
Navigate to the project's root directory.

Install dependencies:

npm install

Start the React application:

npm start

The frontend will open in your browser at http://localhost:3000.

Usage
Once both the backend and frontend are running, you can open multiple browser tabs to http://localhost:3000 to simulate multiple users. Any text you type in one tab will appear in the others in real-time.

Project Structure
/
├── backend/
│   ├── node_modules/
│   ├── server.js
│   └── package.json
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   └── ...
└── package.json

License
This project is licensed under the MIT License.
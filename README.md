# Real-Time Collaborative Text Editor 📝

This project is a real-time collaborative text editor built with the MERN stack (MongoDB, Express, React, Node.js) and powered by Socket.IO. It enables multiple users to seamlessly edit the same document at the same time, with all changes instantly reflected for every participant.

---

## ✨ Features

* **Real-Time Collaboration**: See edits, selections, and cursors from other users instantly.
* **User Avatars**: See who is currently in the document.
* **Dynamic Document Titles**: Edit the document's title in real-time.
* **Rich Text Formatting**: Basic styling options like bold, italic, and underline.

---

## 💻 Tech Stack

* **Frontend**: React
* **Backend**: Node.js, Express
* **Real-Time Communication**: Socket.IO
* **Database**: MongoDB

---

## 📂 File Structure & Important Notes

Please read this section carefully before setting up the project:

* 📁 **Backend**: The `backend` folder is provided as-is and contains all the necessary server-side files.
* 📦 **Frontend (Task 3 file)**: Due to file size limitations, the complete frontend application is contained within the **Task 3 compressed file (e.g., Task 3.rar)**. **You must extract this file** to get all the necessary frontend source code before you can run the application.

---

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

Ensure you have the following software installed on your machine:
* [Node.js](https://nodejs.org/) (which includes npm)
* A tool to extract `.rar` files (like WinRAR or 7-Zip).

### Installation & Setup

1.  **Clone the Repository**
    ```
    git clone <your-repository-url>
    cd <repository-name>
    ```

2.  **Set Up the Backend**
    ```
    # Navigate to the backend directory
    cd backend

    # Install dependencies
    npm install

    # Start the backend server
    npm start
    ```
    > The backend server will now be running on `http://localhost:3001`.

3.  **Set Up the Frontend**
    ```
    # 1. From the project's root directory, find the 'Task 3.rar' file.
    # 2. Extract its contents. This will create a new folder containing the frontend React app.

    # 3. Navigate into the newly extracted frontend directory.
    #    (This might be the root folder if you extract here).
    cd <path-to-your-extracted-frontend-folder>

    # 4. Install dependencies
    npm install

    # 5. Start the frontend application
    npm start
    ```
    > The frontend application will automatically open in your browser at `http://localhost:3000`.

---

## 🔧 Usage

Once both the backend and frontend servers are running, open `http://localhost:3000` in multiple browser tabs to simulate different users. Any changes made in one tab will be instantly reflected in the others.

---

## 📸 Screenshots of Task 3

<img width="1920" height="1028" alt="{A16BF4E6-CD24-4228-B84E-DC40CD382B3D}" src="https://github.com/user-attachments/assets/cbac077e-7c13-42f0-8361-af88d29d1554" />

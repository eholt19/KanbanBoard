# Kanban Board

A full-stack Kanban board application with secure JWT-based authentication, built using React, TypeScript, Express, and PostgreSQL.

---

## 📸 Screenshot

![Krazy Kanban Board Screenshot](./Assets/Screen%20Shot%202025-05-20%20at%201.07.09%20PM.png)  

---

## 🚀 Live Demo

- **Frontend (Netlify):** https://scintillating-gaufre-fd3fbc.netlify.app  
- **Backend (Render API):** https://kanbanboard-suje.onrender.com

> 🔧 Note: Authentication and routing are fully functional. Users can log in, store JWTs, and access protected Kanban features.

---

## 📂 GitHub Repository

https://github.com/eholt19/KanbanBoard

---

## ✅ Features

- Secure login with JSON Web Tokens (JWT)
- Logout clears token and redirects to login page
- Auth token stored in `localStorage`
- Protected routes for authenticated users only
- Kanban board with ticket statuses:
  - To Do
  - In Progress
  - Done
- Create, assign, and edit tickets
- Deployed with separate backend (Render) and frontend (Netlify)

---

## 🛠️ Tech Stack

**Frontend:**
- React (Vite)
- TypeScript
- React Router
- JWT Decode

**Backend:**
- Node.js
- Express
- Sequelize ORM
- PostgreSQL
- bcryptjs
- JSON Web Tokens (JWT)

---

## 🧪 Getting Started Locally

1. Clone the repo

```bash
git clone https://github.com/eholt19/KanbanBoard.git
cd KanbanBoard
```

2. Install dependencies

```bash
cd client && npm install
cd ../server && npm install
```

3. Create PostgreSQL database

```bash
psql -U postgres
CREATE DATABASE kanban_db;
\q
```

4. Set up `.env` in `server/`

```env
DB_NAME='kanban_db'
DB_USER='your_postgres_user'
DB_PASSWORD='your_password'
JWT_SECRET_KEY='supersecret123'
```

5. Run development servers

```bash
# Terminal 1
cd server
npm run dev

# Terminal 2
cd client
npm run dev
```

- Frontend: http://localhost:3000  
- Backend: http://localhost:3001

---

## 💡 User Story

AS a member of an agile team  
I WANT a Kanban board with a secure login page  
SO THAT I can securely access and manage my work tasks

---

## ✅ Acceptance Criteria

- Login form collects username and password
- Valid credentials generate a JWT and redirect to board
- Invalid credentials show an error
- Authenticated requests pass JWT in headers
- Logging out clears JWT and redirects to login
- Session expires after timeout
- Unauthenticated users are redirected to login page

---

## 🌍 Deployment Details

This app is deployed with:

- **Backend (Render)** — Express server + PostgreSQL  
- **Frontend (Netlify)** — Vite + React

Environment variables securely configured in both services.  
Deployment guide: https://coding-boot-camp.github.io/full-stack/render/deploy-with-render-and-postgresql

---

## 👩‍💻 Author

**Emily Holt**  
GitHub: https://github.com/eholt19

---

## 🪪 License

This project is licensed under the [MIT License](LICENSE).

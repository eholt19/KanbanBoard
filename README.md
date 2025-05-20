# Kanban Board

A full-stack Kanban board application with secure JWT-based authentication, built using React, TypeScript, Express, and PostgreSQL.

---

## Screenshot

![Krazy Kanban Board Screenshot](./Assets/Screen%20Shot%202025-05-20%20at%201.07.09%20PM.png)  

---

## Live Demo

[Deployed App on Render](https://kanbanboard-suje.onrender.com)  

---

## GitHub Repository

[https://github.com/eholt19/KanbanBoard](https://github.com/eholt19/KanbanBoard)

---

## Features

- Secure login via JSON Web Tokens (JWT)
- Logout clears token and redirects to login
- Auth token stored in `localStorage`
- Protected routes redirect unauthenticated users
- Drag-and-drop Kanban columns for:
  - To do
  - In Progress
  - Done
- Create and edit tickets
- Fully deployed full-stack app

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
- Bcrypt
- JSON Web Tokens

---

## Getting Started Locally

1. Clone the repository

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

5. Start servers

```bash
# In one terminal
cd server
npm run dev

# In another terminal
cd client
npm run dev
```

- Frontend: http://localhost:3000  
- Backend: http://localhost:3001

---

## User Story

```
AS a member of an agile team  
I WANT a Kanban board with a secure login page  
SO THAT I can securely access and manage my work tasks
```

---

## Acceptance Criteria

- Login with username and password
- JWT is generated and stored client-side
- Access to board requires authentication
- Invalid credentials return error message
- Logging out removes the token and redirects
- Session expires after a set time

---

## Environment Variables

Inside `server/.env`:

```env
DB_NAME='kanban_db'
DB_USER='your_postgres_user'
DB_PASSWORD='your_password'
JWT_SECRET_KEY='supersecret123'
```

---

## Deployment

Deployed using Render with:

- Express + PostgreSQL server
- Vite React frontend
- Environment variables stored securely

Deployment guide:  
[Deploy with Render and PostgreSQL](https://coding-boot-camp.github.io/full-stack/render/deploy-with-render-and-postgresql)

---

## Author

**Emily Holt**  
[GitHub: @eholt19](https://github.com/eholt19)

---

## License

This project is licensed under the [MIT License](LICENSE).


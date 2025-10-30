# React + Vite
## 📚 Student Portal – Resource Management System

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
A full-stack web application built with **React + Vite** (frontend) and **PHP + MySQL** (backend) to help students manage and access academic resources efficiently. Designed for collaborative development and educational deployment, especially for Nepali students and developers.

## React Compiler
- **Frontend**: React + Vite
- **Backend**: PHP (REST API)
- **Database**: MySQL
- **Routing**: React Router
- **Version Control**: Git + GitHub
- **Deployment**: GitHub Pages + Cloudflare (planned)

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
---

## Expanding the ESLint configuration
### 📁 Project Structure

```
/student-portal/
├── backend/          # PHP + MySQL REST API
│   ├── config.php    # DB connection
│   └── api/          # Endpoint files (e.g., getResources.php)
├── src/              # React + Vite frontend
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── .gitattributes
├── README.md
├── package.json
└── vite.config.js
```

---

### 🧑‍💻 Getting Started

#### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ResourceManagerO.git
cd ResourceManagerO
```

#### 2. Install Frontend Dependencies
```bash
npm install
npm run dev
```

#### 3. Set Up Backend (PHP + MySQL)
- Place the `backend/` folder inside your local server directory (e.g., `htdocs` for XAMPP)
- Create a MySQL database named `student_portal`
- Import your schema (e.g., `resources` table)
- Update `backend/config.php` with your DB credentials

#### 4. Run PHP Server
```bash
php -S localhost:8000 -t backend
```

---

### 📡 Connecting Frontend to Backend

Use `fetch` or `axios` in React to call PHP endpoints:
```js
fetch('http://localhost:8000/api/getResources.php')
  .then(res => res.json())
  .then(data => setResources(data));
```

---

### 🛠️ Contribution Guide

We follow a **branch + pull request** workflow:

1. **Create a new branch**:
   ```bash
   git checkout -b feature/your-task
   ```

2. **Make your changes and commit**:
   ```bash
   git add .
   git commit -m "feat: add resource upload form"
   ```

3. **Push your branch**:
   ```bash
   git push origin feature/your-task
   ```

4. **Open a pull request** on GitHub

---

### 📦 Deployment (Planned)

- **Frontend**: GitHub Pages
- **DNS**: Cloudflare + `rashmipariyar.com.np`
- **Backend**: Hosting via shared server or VPS (e.g., InfinityFree, Hostinger)

### 🙌 Acknowledgments

Built with ❤️ by Rashmi and Alisha to empower students through accessible tech.


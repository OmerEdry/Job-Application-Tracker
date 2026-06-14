# 🚀 NextStep | Job Application Tracker

NextStep is a professional tool designed to help developers manage and track their job application journey. It replaces fragmented spreadsheets with a coordinated Kanban interface, focusing on intuitive data visualization and a seamless developer experience.

---

## ✨ Features

* **Full-Stack Kanban Board:** Automatically categorizes live job applications by status (Wishlist, Applied, Interviewing, Offer).
* **Automated Data Sync:** Real-time data synchronization between UI state and backend database upon any CRUD action.
* **Job Application Details:** Displays company logos via automated favicon integration, job metadata (location, work type), and relational technology tags.
* **Global Notification System:** Context-aware alerts for user actions and automated warnings for jobs that haven't been updated recently.
* **Modular Form Architecture:** Uses a reusable BaseForm engine to handle both adding and editing jobs, ensuring a consistent UI and DRY code.

---
## 🛠️ Tech Stack
### 💻Frontend
* **Framework:** React 18 (Vite) utilizing Context API for global state management.
* **UI Library:** Material UI 6 (MUI) with dynamic responsive layouts (Collapsible Sidebar, Kanban Grid).
* **Networking:** Axios integration for centralized API calls, handling asynchronous lifecycle actions (CRUD).
* **Data Layer:** Client-side adapters for data normalization, handling relational data formatting and relative time rendering.

### 🗄️ Backend
* **Runtime & Framework:** Node.js & Express API server built with clean route-controller separation.
* **Database & Architecture:** Relational JSON storage mapping Entities (Applications, Companies, Tags) [🔗ERD](https://dbdiagram.io/d/Copy-of-DB-Design-Final-6a2e80a19340ecc065925300)
* **Data Constraints** Implemented strict backend data validation, input serialization and logical soft-deletes.
---

## 📂 Project Structure

```text
📂 Project Structure
├── 📁 backend/                 # Express API Server
│   ├── 📁 config/              # Server configurations
│   ├── 📁 controllers/         # Request handlers & Business logic
│   ├── 📁 data/                # Database connection, schemas & seeds
│   ├── 📁 routes/              # API Route definitions (applications, companies, tags)
│   ├── 📁 utils/               # Backend helper functions
│   └── ⚙️ server.js            # API Server entry point
│
└── 📁 frontend/                # React UI Application
    └── 📁 src/                 # Application source code
        ├── 📁 assets/          # Custom SVG icons & brand assets
        ├── 📁 components/      # Modular UI components:
        │   ├── 📁 layout/      # App shell (Sidebar, Header)
        │   ├── 📁 JobApps/     # Kanban board cards, columns & board logic
        │   └── 📁 ui/          # Reusable engines (BaseForm, Notifications)
        ├── 📁 context/         # Global state (Context API)
        ├── 📁 styles/          # Material UI (MUI) Theme & global styles
        ├── 📁 utils/           # Data adapters, formatters & constants
        └── 📄 App.jsx          # Main application component & layout wrapper
```

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/sharon011/Job-Applications-Management-tool.git
```
### 2. Setup BackEnd
```bash
cd backend
npm install
npm start
```
### 3. Setup FrontEnd
```bash
cd ../frontend
npm install
npm run dev
```


---
## 🤝 Collaboration & Workflow
This project was developed using professional software development standards:
* **Feature Branching:** Every new feature was developed on a dedicated branch to keep the `main` branch stable.
* **Pull Requests & Code Reviews:** All changes were merged via PRs, including peer code reviews to ensure code quality and maintainability.
* **Git Standards:** Clear commit messages and organized version control management.
* **Figma-to-Code:** Strict adherence to UI requirements and design specs to ensure a pixel-perfect implementation.
---

## 👥 Team Members
**Omer Edry** - [GitHub](https://github.com/OmerEdry)

**Sharon Anderman** - [GitHub](https://github.com/sharon011)

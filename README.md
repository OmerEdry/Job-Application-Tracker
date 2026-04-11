# 🚀 NextStep | Job Application Tracker

NextStep is a professional tool designed to help developers manage and track their job application journey. It replaces fragmented spreadsheets with a coordinated Kanban interface, focusing on intuitive data visualization and a seamless developer experience.

> **Note:** 🏗️ This project is currently in **Phase 1 (Frontend & Architecture)**. It uses a structured Mock Data layer designed for a smooth transition to backend integration.

---

## ✨ Features

* **Kanban Board:** Automatically categorizes job applications by status (Wishlist, Applied, Interviewing, Offer).
* **Job Application Details:** Displays company logos, job metadata (location, work type), and technology tags.
* **Global Notification System:** Context-aware alerts for user actions and automated warnings for jobs that haven't been updated recently.
* **Modular Form Architecture:** Uses a reusable BaseForm engine to handle both adding and editing jobs, ensuring a consistent UI and DRY code.
* **Responsive Layout:** Includes a collapsible sidebar and flexible grid system built with Material UI (MUI).

---

## 🛠 Tech Stack

* **Framework:** React 18 (Vite)
* **UI Library:** Material UI 6 (MUI)
* **State Management:** Context API
* **Date Logic:** Day.js
* **Styling:** Styled-components and MUI Theme customization

---

## 📂 Project Structure

```text
src/
├── assets/          # Custom SVG icons and brand assets
├── components/      # Modular UI components:
│   ├── layout/      # App shell (Sidebar, Header, MainLayout)
│   ├── JobApps/     # Kanban board and job-management logic
│   └── ui/          # Reusable components (BaseForm, Notifications)
├── context/         # Global state management
├── mockJobs/        # Data simulation and JSON structures
├── styles/          # MUI Theme and styled-component definitions
└── utils/           # Helper functions and configurations (Routes, Kanban, Sidebar)
```

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/sharon011/Job-Applications-Management-tool.git
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

---
## 🤝 Collaboration & Workflow

This project was developed using professional software development standards:
* **Feature Branching:** Every new feature was developed on a dedicated branch to keep the `main` branch stable.
* **Figma-to-Code:** Strict adherence to UI requirements and design specs to ensure a pixel-perfect implementation.
* **Pull Requests & Code Reviews:** All changes were merged via PRs, including peer code reviews to ensure code quality and maintainability.
* **Git Standards:** Clear commit messages and organized version control management.
---

## 👥 Team Members
**Omer Edry** - [GitHub](https://github.com/OmerEdry)

**Sharon Anderman** - [GitHub](https://github.com/sharon011)

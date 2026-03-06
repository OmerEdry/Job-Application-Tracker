import { Navigate } from 'react-router-dom';
import KanbanBoard from '../components/kanban/KanbanBoard'

export const routes = [
  // Defual Page
  { path: '/', element: <Navigate to="/jobs" replace /> },

  //Pages routes
  { path: '/jobs', element: <KanbanBoard /> },
  { path: '/resumes', element: <div>Resumes Page</div> },
  { path: '/subscription', element: <div>Subscription Page</div> },
  { path: '/archive', element: <div>Archive Page</div> },
  { path: '/settings', element: <div>Settings Page</div> },

  // Error page
  { path: '*', element: <div style={{ color: 'red' }}>404 - Page Not Found</div> }
];
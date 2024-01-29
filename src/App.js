import React from 'react';
import { HashRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faTasks, faCogs, faComments, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import AssignmentsPage from './pages/AssignmentsPage';
import NotFoundPage from './pages/NotFoundPage';
import SetupPage from './pages/SetupPage';

const App = () => {
  return (
    <Router basename="/">
      <div className="flex min-h-screen bg-gray-50 justify-center">
        {/* Sidebar */}
        <div className="w-48 bg-gray-50 px-2 py-10 mr-4 mt-20">
          <nav className="flex flex-col text-lg space-y-4">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-indigo-600" : "text-gray-800 hover:text-indigo-500"}>
              <FontAwesomeIcon icon={faHome} className="text-sm mr-2" /> Home
            </NavLink>
            <NavLink to="/course" className={({ isActive }) => isActive ? "text-indigo-600" : "text-gray-800 hover:text-indigo-500"}>
              <FontAwesomeIcon icon={faBook} className="text-sm mr-2" /> Course
            </NavLink>
            <NavLink to="/assignments" className={({ isActive }) => isActive ? "text-indigo-600" : "text-gray-800 hover:text-indigo-500"}>
              <FontAwesomeIcon icon={faTasks} className="text-sm mr-2" /> Assignments
            </NavLink>
            {/* External Links */}
            <a href="https://edstem.org/us/courses/55268/discussion/" className="text-gray-800 hover:text-indigo-500">
              <FontAwesomeIcon icon={faComments} className="text-sm mr-2" /> Ed Discussions
            </a>
            <a href="https://www.gradescope.com/courses/722301" className="text-gray-800 hover:text-indigo-500">
              <FontAwesomeIcon icon={faFileAlt} className="text-sm mr-2" /> Gradescope
            </a>
          </nav>
        </div>
        {/* Content Area */}
        <main className="flex-1 p-10 px-4 max-w-3xl">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/course" element={<CoursePage />} />
            <Route path="/assignments" element={<AssignmentsPage />} />
            <Route path="/setup" element={<SetupPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

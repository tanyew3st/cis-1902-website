import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import AssignmentsPage from './pages/AssignmentsPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50 justify-center">
        {/* Sidebar */}
        <div className="w-48 bg-gray-50 px-2 py-10 mr-4 mt-20">
          <nav className="flex flex-col text-lg space-y-4">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-indigo-600" : "text-gray-800 hover:text-indigo-500"}>Home</NavLink>
            <NavLink to="/course" className={({ isActive }) => isActive ? "text-indigo-600" : "text-gray-800 hover:text-indigo-500"}>Course</NavLink>
            <NavLink to="/assignments" className={({ isActive }) => isActive ? "text-indigo-600" : "text-gray-800 hover:text-indigo-500"}>Assignments</NavLink>
            <a href="https://edstem.org/us/courses/55268/discussion/" className="text-gray-800 hover:text-indigo-500">Ed Discussions</a>
            <a href="https://www.gradescope.com/courses/722301" className="text-gray-800 hover:text-indigo-500">Gradescope</a>
          </nav>
        </div>
        {/* Content Area */}
        <main className="flex-1 p-10 mx-4 max-w-3xl">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/course" element={<CoursePage />} />
            <Route path="/assignments" element={<AssignmentsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

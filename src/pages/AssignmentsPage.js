import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Assignment data
const assignments = [
  {
    number: 0,
    title: "Python Setup Instructions",
    description: "Not an assignment, but a primer to help you set up your Python development environment.",
    mainLink: "/setup",
    links: [
    ]
  },
  {
    number: 1,
    title: "Python Basics",
    description: "Due Date: 09/07 - Explore the fundamentals of Python.",
    mainLink: "/python-basics",
    links: [
    ]
  },
];

const AssignmentsPage = () => {
  const navigate = useNavigate();

  const handleBlockClick = (e, url) => {
    e.stopPropagation();
    navigate(url);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Assignments</h1>
      <div className="space-y-6">
        <p className="text-lg mb-6">Here you'll find a list of assignments for the course along with due dates and submission guidelines.</p>
        
        {assignments.map((assignment) => (
          <div 
            key={assignment.number} 
            className="p-4 border border-gray-200 rounded-md shadow-sm cursor-pointer"
            onClick={(e) => handleBlockClick(e, assignment.mainLink)}
          >
            <h2 className="text-2xl font-semibold mb-2">Assignment {assignment.number}: {assignment.title}</h2>
            <p className="mb-4">{assignment.description}</p>
            <div onClick={(e) => e.stopPropagation()}>
              {assignment.links.map((link, index) => (
                <Link key={index} to={link.url} className="text-indigo-600 hover:text-indigo-500 mr-4">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentsPage;

import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Assignment data with link type indicator
const assignments = [
  {
    number: 0,
    title: "Python Setup Instructions",
    description:
      "Not an assignment, but a primer to help you set up your Python development environment.",
    link: "/setup",
    isInternalLink: true, // Link within the React app
  },
  {
    number: 1,
    title: "Python Basics",
    description: "Due Date: 02/13 - Explore the fundamentals of Python.",
    link: `${process.env.PUBLIC_URL}/homeworks/hw1.py`, // Link to a static file
    isInternalLink: false, // Direct link to a file
  },
  {
    number: 2,
    title: "Advanced and Functional Python",
    description:
      "Due Date: 02/20 - Dive deeper into Python and learn about functional programming.",
    link: `${process.env.PUBLIC_URL}/homeworks/hw2.zip`,
    isInternalLink: false,
  },
  {
    number: 3,
    title: "Larger-Scale Python",
    description:
      "Due Date: 02/29 - Deeper dive into modules, testing, typing, memory(ish).",
    link: `${process.env.PUBLIC_URL}/homeworks/hw3.zip`,
    isInternalLink: false,
  },
  {
    number: 4,
    title: "Data Science",
    description: "Due Date: 03/20 - March Madness bracket predictions.",
    link: `${process.env.PUBLIC_URL}/homeworks/hw4.zip`,
    isInternalLink: false,
  },
  {
    number: 5,
    title: "Deep Learning",
    description:
      "Due Date: 04/02 - Using Deep Learning for Digit Classification",
    link: `${process.env.PUBLIC_URL}/homeworks/hw5.zip`,
    isInternalLink: false,
  },
  {
    number: 6,
    title: "Requests & Flask (& LLMs)",
    description: "Due Date: 04/16 - Using APIs and building a simple web app.",
    link: `${process.env.PUBLIC_URL}/homeworks/hw6.zip`,
    isInternalLink: false,
  },
  {
    number: 7,
    title: "Final Project Milestone 1",
    description: "Due Date: 04/16 - Final project details.",
    link: `${process.env.PUBLIC_URL}/homeworks/final_project.md`,
    isInternalLink: false,
  },
  // Additional assignments...
];

const AssignmentsPage = () => {
  const navigate = useNavigate();

  const handleAssignmentClick = (assignment) => {
    if (assignment.isInternalLink) {
      navigate(assignment.link);
    } else {
      window.open(assignment.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Assignments</h1>
      <div className="space-y-6">
        <p className="text-lg mb-6">
          Here you'll find a list of assignments for the course along with due
          dates and submission guidelines.
        </p>
        {assignments.map((assignment) => (
          <div
            key={assignment.number}
            className="p-4 border border-gray-200 rounded-md shadow-sm cursor-pointer"
            onClick={() => handleAssignmentClick(assignment)}
          >
            <h2 className="text-2xl font-semibold mb-2">
              Assignment {assignment.number}: {assignment.title}
            </h2>
            <p className="mb-4">{assignment.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentsPage;

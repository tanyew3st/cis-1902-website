import React from 'react';

const AssignmentsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Assignments</h1>
      <div className="space-y-4">
        <p className="text-lg">Here you'll find a list of assignments for the course along with due dates and submission guidelines.</p>
        {/* Example Assignment */}
        <div className="p-4 border border-gray-200 rounded-md shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Assignment 1: Python Basics</h2>
          <p>Due Date: 09/07 - Explore the fundamentals of Python.</p>
        </div>
        {/* Add more assignments in similar structure */}
      </div>
    </div>
  );
};

export default AssignmentsPage;

import React from 'react';

const CoursePage = () => {
  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-3xl font-bold text-center mb-6">Course Schedule</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-200 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-3 py-2 text-left">Lec</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Date</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Notes</th>
              <th className="border border-gray-200 px-3 py-2 text-left">HW</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample Row */}
            <tr>
              <td className="border border-gray-200 px-3 py-2">1</td>
              <td className="border border-gray-200 px-3 py-2">09/07</td>
              <td className="border border-gray-200 px-3 py-2">Intro to Python</td>
              <td className="border border-gray-200 px-3 py-2">
                <a href="#" className="text-indigo-600 hover:text-indigo-500">HW1</a>
              </td>
            </tr>
            {/* Additional rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursePage;

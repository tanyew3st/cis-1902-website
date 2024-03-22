import React from "react";

const CoursePage = () => {
  const lectures = [
    {
      lecNum: 1,
      date: "01/23",
      notes: [
        { label: "Introduction Slides", filename: "lectures/lecture_1.pptx" },
        { label: "Basics of Python", filename: "lectures/week_1.ipynb" },
      ],
      homework: null,
    },
    {
      lecNum: 2,
      date: "01/30",
      notes: [
        { label: "Week 2 Slides", filename: "lectures/lecture_2.pptx" },
        { label: "Data Structures", filename: "lectures/week_2.ipynb" },
      ],
      homework: { label: "Homework 1", filename: "homeworks/hw1.py" },
    },
    {
      lecNum: 3,
      date: "02/06",
      notes: [
        { label: "Functions and Classes", filename: "lectures/week_3.ipynb" },
      ],
    },
    {
      lecNum: 4,
      date: "02/13",
      notes: [
        {
          label: "File I/O, Exceptions, Advanced Python",
          filename: "lectures/week_4.ipynb",
        },
      ],
      homework: { label: "Homework 2", filename: "homeworks/hw2.zip" },
    },
    {
      lecNum: 5,
      date: "02/20",
      notes: [
        {
          label: "Memory, Typing, Testing, Environments",
          filename: "lectures/week_5.zip",
        },
      ],
      homework: { label: "Homework 3", filename: "homeworks/hw3.zip" },
    },
    {
      lecNum: 6,
      date: "02/27",
      notes: [{ label: "Data Science", filename: "lectures/week_6.ipynb" }],
      homework: { label: "Homework 4", filename: "homeworks/hw4.zip" },
    },
    {
      lecNum: 7,
      date: "03/12",
      notes: [
        {
          label: "MatPlotLib",
          filename: "lectures/week_7_1.ipynb",
        },
        {
          label: "Sci-Kit Learn",
          filename: "lectures/week_7_2.ipynb",
        },
        {
          label: "Slides",
          filename: "lectures/week_7.pdf",
        },
      ],
    },
    {
      lecNum: 8,
      date: "03/19",
      notes: [
        {
          label: "Code",
          filename: "lectures/week_8_1.ipynb",
        },
        {
          label: "Slides",
          filename: "lectures/week_8_2.pdf",
        },
      ],
      homework: { label: "Homework 5", filename: "homeworks/hw5.zip" },
    },
    {
      lecNum: 9,
      date: "03/26",
      notes: [
        {
          label: "Final Project",
          filename: "lectures/week_9.ipynb",
        },
        {
          label: "Slides",
          filename: "lectures/week_9.pdf",
        },
      ],
    },
  ];

  const downloadFile = (filename) => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/${filename}`;
    link.download = filename.split("/").pop(); // Set the download filename
    document.body.appendChild(link); // Required for Firefox
    link.click();
    document.body.removeChild(link);
  };

  const renderLink = (item) => {
    if (item.url) {
      // External link
      return (
        <a
          href={item.url}
          className="text-indigo-600 hover:text-indigo-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.label}
        </a>
      );
    } else {
      // Local file link for download
      return (
        <span
          onClick={() => downloadFile(item.filename)}
          className="text-indigo-600 hover:text-indigo-500 cursor-pointer"
        >
          {item.label}
        </span>
      );
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-3xl font-bold text-center mb-6">Course Schedule</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-200 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-3 py-2 text-left">
                Lec
              </th>
              <th className="border border-gray-200 px-3 py-2 text-left">
                Date
              </th>
              <th className="border border-gray-200 px-3 py-2 text-left">
                Notes
              </th>
              <th className="border border-gray-200 px-3 py-2 text-left">HW</th>
            </tr>
          </thead>
          <tbody>
            {lectures.map((lecture) => (
              <tr key={lecture.lecNum}>
                <td className="border border-gray-200 px-3 py-2">
                  {lecture.lecNum}
                </td>
                <td className="border border-gray-200 px-3 py-2">
                  {lecture.date}
                </td>
                <td className="border border-gray-200 px-3 py-2">
                  {lecture.notes.map((note, index) => (
                    <div key={index}>{renderLink(note)}</div>
                  ))}
                </td>
                <td className="border border-gray-200 px-3 py-2">
                  {lecture.homework ? renderLink(lecture.homework) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursePage;

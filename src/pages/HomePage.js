import React from "react";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4 max-w-5xl">
      {" "}
      {/* Adjusted the max-width */}
      <h1 className="text-4xl font-bold text-center mb-8">CIS 1902: Python</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Staff</h2>
        <ul className="list-disc list-inside">
          <div>
            <strong>Instructor:</strong>
            <a className="text-indigo-600" href="mailto:tanayc@seas.upenn.edu">
              {" "}
              Tanay Chandak
            </a>
            <p className="ml-5">Office Hours: S 8-9 PM on OHQ</p>
          </div>
          <div>
            <strong>Teaching Assistant:</strong>
            <a
              className="text-indigo-600"
              href="mailto:jkakadia@seas.upenn.edu"
            >
              {" "}
              Jash Kakadia
            </a>
            <p className="ml-5">Office Hours: M 7-8 PM on OHQ</p>
          </div>
          <div>
            <strong>Teaching Assistant:</strong>
            <a
              className="text-indigo-600"
              href="mailto:visheshp@seas.upenn.edu"
            >
              {" "}
              Vishesh Patel
            </a>
            <p className="ml-5">Office Hours: S 11-1 PM on OHQ</p>
          </div>
        </ul>
      </section>
      {/* Python Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Python: An Overview</h2>
        <p>
          Python is a high-level, interpreted programming language known for its
          simplicity and versatility. It's widely used in various fields, from
          web development to data science and machine learning. In this course,
          we explore why Python is a preferred language for developers and data
          scientists alike.
        </p>
      </section>
      {/* Syllabus */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Syllabus Breakdown</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>10% Quizzes</strong> - Regular quizzes to assess
            understanding.
          </li>
          <li>
            <strong>10% Attendance</strong> - Active participation in classes.
          </li>
          <li>
            <strong>60% Weekly Assignments</strong> - Practical tasks to apply
            learning.
          </li>
          <li>
            <strong>20% Final Project</strong> - A comprehensive project
            encapsulating course topics.
          </li>
        </ul>
      </section>
      {/* Course Topics */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Course Topics</h2>
        <ul className="list-disc list-inside">
          <li>Python Syntax and Python Programming</li>
          <li>Data Structures in Python</li>
          <li>Python Internals</li>
          <li>Testing, Clean Code, Typing</li>
          <li>Data Science</li>
          <li>Machine Learning</li>
          <li>Deep Learning & Large Language Models</li>
          <li>Requests & Web Scraping</li>
          <li>Full-Stack Web Development</li>
          <li>Cloud Computing</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;

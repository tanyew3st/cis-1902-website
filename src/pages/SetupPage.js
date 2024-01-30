import React from 'react';

const SetupPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Python Development Environment Setup</h1>

      {/* Introduction */}
      <section className="mb-8">
        <p className="text-lg">Starting your journey with Python programming is exciting! This guide will help you set up your development environment, covering everything from installing Python to writing and running your first Python script.</p>
      </section>

      {/* Editor Installation */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Installing a Code Editor</h2>
        <p>Begin by installing a code editor. We recommend <a href="https://code.visualstudio.com/" className="text-indigo-600 hover:text-indigo-500">Visual Studio Code (VSCode)</a> for its ease of use and rich features. It's a lightweight but powerful source code editor.</p>
        <p>For students, <a href="https://www.jetbrains.com/pycharm/download/" className="text-indigo-600 hover:text-indigo-500">PyCharm</a> is another excellent option and is available for free (I still recommend VSCode).</p>
      </section>

      {/* Python Installation */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Installing Python</h2>
        <p>Python is an interpreted, high-level programming language. Download and install it from the <a href="https://www.python.org/downloads/" className="text-indigo-600 hover:text-indigo-500">official Python website</a>. Ensure to add Python to your system PATH during installation.</p>
      </section>

      {/* Creating a Python File */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Creating a Python Script</h2>
        <p>Open your code editor and create a new file named <strong>hello.py</strong>. Write the following line in your file:</p>
        <div className="bg-gray-100 p-4 rounded-md">
          <code>print("Hello, Python!")</code>
        </div>
        <p>This simple script outputs a greeting to the console. The '.py' extension indicates that it's a Python file.</p>
      </section>

      {/* Running the Script */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Running the Script</h2>
        <p>To run your Python script, open the terminal or command prompt. Navigate to the directory containing your script using the <code>cd</code> command, then type:</p>
        <div className="bg-gray-100 p-4 rounded-md">
          <code>python hello.py</code>
        </div>
        <p>You should see "Hello, Python!" printed in the console.</p>
      </section>

      {/* Python in the Terminal */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Interactive Python in the Terminal</h2>
        <p>Python can be run in interactive mode in the terminal. Simply type <code>python</code> and hit enter. You can then write Python code directly and see the output immediately.</p>
        <p>When you're finished, exit the interactive mode by typing <code>exit()</code>.</p>
      </section>

      {/* VSCode Python Extension */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Python Extension for VSCode</h2>
        <p>In VSCode, the Python extension can greatly enhance your coding experience. It provides features like IntelliSense, debugging, and code navigation. You can install it from the Extensions view in VSCode.</p>
      </section>

      {/* That's it - python is meant to be easy. stop by office hours if you need help and move to the first assignment */}
        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">That's it!</h2>
            <p>You've successfully set up your Python development environment. If you need help, feel free to stop by office hours or post on Ed Discussions.</p>
            <p>Now, you're ready to start working on your first assignment. Head over to the <a href="/assignments" className="text-indigo-600 hover:text-indigo-500">Assignments</a> page to get started.</p>
        </section>
      

    </div>
  );
};

export default SetupPage;

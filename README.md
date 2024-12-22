# Unhandled Promise Rejection in MongoDB Connection

This example demonstrates a common issue in MongoDB Node.js applications: unhandled promise rejections.  The provided code attempts to connect to a MongoDB database but lacks proper error handling.  This can cause the application to silently fail without clear indication of the problem.

The `bug.js` file showcases the problem.  The `bugSolution.js` file presents a corrected version with robust error handling.
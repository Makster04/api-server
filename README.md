# api-server
[Deployment](https://api-server-b9i6.onrender.com)

* **The error messages you're encountering suggest a few issues in your code and project setup:**

1. **TypeError:** Cannot read properties of undefined (reading 'sync'): This error indicates that sequelize is undefined when you try to call the sync() method on it. This typically happens when Sequelize is not properly initialized or imported. Make sure you have imported Sequelize correctly in your test file and initialized it before using it.

2. **Cannot find module './routes/playerRoutes' from 'src/server.js':** This error indicates that the module playerRoutes couldn't be found. Double-check the file path to ensure it is correct. It seems like you've corrected the file path in your server.js file, but it's still not finding the module. Ensure that the path is relative to the location of server.js.

* **To resolve these issues:**

1. Check your Sequelize initialization in your test file (models.test.js) to ensure it's correctly importing and initializing Sequelize.**
2. Double-check the file paths for your routes in server.js and ensure they are correct relative to the location of server.js.
* Once you've corrected these issues, run your tests again to verify that they pass. If you're still encountering issues, feel free to provide more details or code snippets for further assistance.





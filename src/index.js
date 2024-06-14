// /user-discussion-app/src/index.js

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const discussionRoutes = require('./routes/discussionRoutes');
const authRoute = require('./routes/authRoute');
const connectDB = require('./config/db');

const app = express();
const PORT = 3000;


connectDB();

// Middleware
app.use(bodyParser.json());

// Set up routes
app.use('/users', userRoutes);
app.use('/api/auth', authRoute);
app.use('/discussions', discussionRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

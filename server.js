const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

// Use history mode middleware
app.use(history());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

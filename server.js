const express = require('express');
const app = express();
const port = 3000; // Choose the port you want to run your server on

// Example endpoint
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from your Express API!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
app.get('/api/data', (req, res) => {
    // Logic to retrieve data goes here
    const data = [
        { id: 1, name: 'Example 1' },
        { id: 2, name: 'Example 2' },
        // Add more data as needed
    ];
    res.json(data);
});
app.get('/api/datatwo', (req, res) => {
    // Logic to retrieve data goes here
    const data = [
        { id: 1, name: 'Example 1' },
        { id: 2, name: 'Example 2' },
        // Add more data as needed
    ];
    res.json(data);
});

// Define a POST endpoint
app.post('/api/addData', (req, res) => {
    // Logic to add data goes here
    // Access request body with req.body
    res.json({ message: 'Data added successfully' });
});
//
const express = require('express');
const mongoose = require('mongoose');
const teamController = require('./controllers/teamController.js')
const categoryController = require('./controllers/categoryController.js')
const app = express();
const cors = require('cors');
const port = 3000;

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0', // OpenAPI version
        info: {
            title: 'Your API Documentation',
            version: '1.0.0',
            description: 'API documentation using Swagger',
        },
    },
    // Path to the API endpoints
    apis: ['./controllers/*.js'], // Update the path as per your folder structure
};

const swaggerSpec = swaggerJSDoc(options);
// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/question-time').then(() => {
    console.log("connected");
})

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


app.get('/api/teams/', teamController.getTeams);
app.get('/api/teams/:id', teamController.getTeamById);

app.get('/api/categories', categoryController.getCategories);
app.get('/api/categories/:id', categoryController.getCategoryById);

/*
    change status of a question,

*/
//app.post('/api/example', teamController.postExample);
/*
createTeam();
async function createTeam() {
    try {
        const team = await Team.create({
            name: "First Team",
            color: "#a1b2c3",
            order: 1,
            score: 0,
        })
        console.log("team:", team);
    } catch (error) {
        console.log("error while creating team:", error.message);
    }
}
*/

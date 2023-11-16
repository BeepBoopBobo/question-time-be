const express = require('express');
const mongoose = require('mongoose');
const teamController = require('./controllers/teamController.js')
const categoryController = require('./controllers/categoryController.js')
const app = express();
const port = 3000;

app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/question-time').then(() => {
    console.log("connected");
})

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


app.get('/api/teams', teamController.getTeams);
app.get('/api/teams/:id', teamController.getTeamById);

app.get('/api/categories', categoryController.getCategories);
app.get('/api/categories/:id', categoryController.getCategoryById);

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

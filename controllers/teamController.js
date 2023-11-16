const Team = require('../models/Team.js');

exports.getTeams = async (req, res) => {
    const searchedTeam = await Team.find();
    res.status(200).send({ searchedTeam });
};

exports.getTeamById = async (req, res) => {
    const teamID = req.params.id;
    const searchedTeam = await Team.findById(teamID);

    console.log("Team_id", teamID);
    console.log("Team", searchedTeam);
    res.status(200).send({ searchedTeam });
};

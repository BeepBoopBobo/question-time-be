const Team = require('../models/Team.js');
/**
 * @swagger
 * /api/teams:
 *   get:
 *     summary: Get list of teams
 *     description: Retrieve list of teams from the server
 *     responses:
 *       '200':
 *         description: A successful response
 */
exports.getTeams = async (req, res) => {
    const searchedTeam = await Team.find();
    res.status(200).send({ searchedTeam });
};
/**
 * @swagger
 * /api/teams/id:
 *   get:
 *     summary: Get specific team by id
 *     description: Retrieve specific team by id from the server
 *     responses:
 *       '200':
 *         description: A successful response
 */
exports.getTeamById = async (req, res) => {
    const teamID = req.params.id;
    const searchedTeam = await Team.findById(teamID);

    console.log("Team_id", teamID);
    console.log("Team", searchedTeam);
    res.status(200).send({ searchedTeam });
};

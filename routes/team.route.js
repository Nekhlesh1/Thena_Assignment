const express = require('express')
const { getAllTeams, addTeam } = require('../controllers/team.controller')
const router = express.Router()


router.get('/getAll',getAllTeams )
router.post('/addTeam', addTeam)

module.exports = router
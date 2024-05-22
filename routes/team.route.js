const express = require('express')
const {getMembers, addMember, updateMemberDetails, deleteMember } = require('../controllers/team.controller')
const router = express.Router()


router.get('/getAll', getMembers )
router.post('/add', addMember)
router.put("/update", updateMemberDetails)
router.delete("/delete",deleteMember)

module.exports = router
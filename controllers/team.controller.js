const Team = require('../models/teams.model.js')

module.exports.getAllTeams = async(req,res) =>
    {
        res.send("Inside get all teams")
    }

module.exports.addTeam = async(req,res) =>
    {
        
        try 
        {
            // destructuring
            const {firstName, lastName, email, phone, role} = req.body
            
            console.log(firstName, lastName, email, phone, role)
            
            // checking if all fields are filled
            if ( [firstName,lastName, role, email, phone].some((field) =>  field?.trim() === ""))
                {
                    return res.status(400).json({msg: "Please enter required fields"})
                }
            
            // creating a new user with given details 
            const member = await Team.create
            ({
                firstName, 
                lastName, 
                email,
                phone, 
                role
            })

            // sending success response
            if(member)
            return res.status(201).json({msg : "User created successfully", member})




        } catch (error) {
            return res.status(400).send(error)
        }
    }
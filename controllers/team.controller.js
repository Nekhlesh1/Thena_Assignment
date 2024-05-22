const Team = require('../models/teams.model.js')

module.exports.getMembers = async(req,res) =>
    {
       try 
       {
         const allMembers = await Team.find({})

         if(allMembers)
            {
                return res.status(200).json(allMembers)
                
            }

       } 
       catch (error) 
       {
        return res.status(400).send(error)
       }
    }

module.exports.addMember = async(req,res) =>
    {
        
        try 
        {
            // destructuring
            const {firstName, lastName, email, phone, role} = req.body
            
            // console.log(firstName, lastName, email, phone, role)
            
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

    module.exports.updateMemberDetails = async(req,res)=>
        {
            try {
                // getting member id from query params
                const { _id } = req.query;
                
                // fetching by given id in db and updating
                const member = await Team.findByIdAndUpdate(_id, req.body, {
                  new: true,
                  runValidators: true,
                });
                
                // if meber not found with the given user id
                if (!member) 
                    {
                        return res.status(404).json({ msg: "Member not found with the given id" });
                    }

                //  on success   
                return res.status(200).json({msg : "Member details updated successfully",member});
              } 
              catch (error) 
              {
                res.status(400).json({ msg: error.message });
              }
            }
        

module.exports.deleteMember = async(req,res) =>
    {
        try 
        {
            
            // getting member id from query params
            const { _id } = req.query;
            
            // fetching by id and deleting member
            const member = await Team.findByIdAndDelete(_id);
            
            // If meber not found with given id
            if(!member) 
                {
                    return res.status(404).json({ msg: "Member with the given id not found" });
                }
            // on success
           return  res.status(200).json({ msg: "Member removed successfully" });
          } 
          catch (error) 
          {
            return res.status(500).json({ msg: error.message });
          }
    }
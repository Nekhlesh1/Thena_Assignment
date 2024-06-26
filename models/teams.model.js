const mongoose = require("mongoose");
const validator = require("validator");


const teamSchema = mongoose.Schema(
    {
        firstName :
        {
            type : String,
            required: [true,' Please enter first name'],
            trim: true
        },
        lastName :
        {
            type : String,
            required : false,
            trim: true
        },
        phone :
        {
            type : String,
            unique : true,
            validate: {
                validator: function (num) {
                  return validator.isMobilePhone(num, "any", { strictMode: true });
                },
                message: () => `Enter a valid phone number!`,
              },
            required: [true,' Phone number is required'],
        },
        email :
        {
            type : String,
            unique : true,
            validate: {
                validator: function (mail) {
                  return validator.isEmail(mail);
                },
                message: () => `Please enter a valid email !`,
              },
            required: [true,' Please enter email'],
        },
        role:
        {
            type : String,
            enum: ["admin", "user"],
            default : "user"
        }
    },
    {
        timestamps : true
    })

const Team = mongoose.model('Teams', teamSchema)
module.exports = Team
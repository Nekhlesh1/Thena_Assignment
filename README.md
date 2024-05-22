## Assignment : ##
Backend Application to implement CRUD functionality
Frameworks and Libraries used : Node.js, Express.js, Mongoose, Nodemon, dotenv, validator

## Setup procedure : ## 
    1. Clone the repository using  "git clone" command in your local machine
    2. use "npm i" to install all the dependencies
    3. create a new .env file and copy the variables :
          code (PORT = 8000 
          MONGO_URL = 'mongodb+srv://nekhlesh:J5NosgqqnfN8feRG@cluster0.pgjuzrr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  The application is ready to use.
  We can test the API endpoints with the help of Postman as well as folllowing curl commands :
1. GET method to get the list of all members of the team :
          curl -Method GET http://localhost:8000/api/team/getAll 

2. POST method to add a new member to the team :
          curl -Method POST http://localhost:8000/api/team/add -Headers @{"Content-Type"="application/json"} -Body '{"firstName": "John", "lastName": "WickE", "phone": "+918212345674", "email": "john@12gd.com", "role": "user"}'

3. PUT method for updating existing member details :
           curl -Method PUT http://localhost:8000/api/team/update?_id=664e0b2d33cc108f54e1cf6c -Headers @{"Content-Type"="application/json"} -Body '{"firstName": "Robert ", "lastName": "Williams"}' 

4. DELETE method to remove member from list :
          curl -Method DELETE http://localhost:8000/api/team/delete?_id=664e0b2d33cc108f54e1cf6c -Headers @{"Content-Type"="application/json"}
   

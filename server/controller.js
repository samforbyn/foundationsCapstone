const users = []
const bcrypt = require("bcryptjs")

module.exports = {
    login: (req, res) => {
        console.log("Logging in...")
        console.log(req.body)
        const {username, password} = req.body
        for(let i = 0; i < users.length; i++){
            const existingUser = bcrypt.compareSync(password, users[i].pwHash)
            if(users[i].username === username){
                if(existingUser){
                    let userReturn = {...users[i]}
                    delete userReturn.pwHashrs
                    // res.status(200).send(userReturn)
                }
            }else{
                res.status(400).send("User not found")
            }
        }
    },
    
    register: (req, res) => {
        console.log("Registering user...")
        console.log(req.body)

        const {username, email, firstName, lastName, password} = req.body
        let salt = bcrypt.genSaltSync(5)
        let pwHash = bcrypt.hashSync(password, salt)

        let userObject = {
            username, 
            email, 
            firstName, 
            lastName, 
            pwHash
        }

        users.push(userObject)
        // res.send(200).send(userObject)
        console.log(userObject)
    }
}
const users = require("./usersDb.json")
const allStories = require("./storyDb.json")
const bcrypt = require("bcryptjs")
let storyId = 1
let currentStory = 0
module.exports = {

    fetchStory: (req, res) => {
        const {id} = req.params
        for(let i = 0; i < allStories.length ; i++){
            if(+allStories[i].story_id == +id){
                const storyNum = allStories[i].story_id
                const userStory = allStories[i].userStory
                const postBody = {
                    number :`<h2>#${storyNum}</h2>`,
                    story: `<h1>${userStory}</h1>`
                }
                res.status(200).send(postBody)
            }
            }

        // res.status(200).send(currentStory)
    },

    getPost: (req, res) => {
        const {id} = req.params
        for(let i = 0; i < allStories.length ; i++){
        if(+allStories[i].story_id == +id){
            const storyNum = allStories[i].story_id
            const userStory = allStories[i].userStory
            const postBody = `<h2>${storyNum}</h2> 
                <h1>${userStory}</h1>`
                // currentStory.push(postBody)
                // currentStory =
            res.status(200).send(postBody)
        }
        }

    },
    postStory: (req, res) => {
        req.body.story_id = storyId
        console.log(req.body)
        allStories.push(req.body)
        console.log(allStories)
        res.status(200).send(req.body)
        currentStory = storyId
        storyId++
        // console.log(currentStory)
    },
    
    loadFeed: (req, res) => {
        console.log(allStories)
        res.status(200).send(allStories)
    },
    
    login: (req, res) => {
        console.log(req.body)
        const {username, password} = req.body
        for(let i = 0; i < users.length; i++){
            const existingUser = bcrypt.compareSync(password, users[i].pwHash)
            if(users[i].username === username){
                if(existingUser){
                    let userReturn = {...users[i]}
                    console.log("Logging in...")
                    console.log(userReturn)
                    res.redirect('/home')
                    // res.status(200).send(userReturn)
                }else{
                    // res.status(400).send("Invalid password")
                }
            }else{
                console.log("user not found")
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
        res.status(200).send(userObject)
        console.log(users, "userdb")
    }
}
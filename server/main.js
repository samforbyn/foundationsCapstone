const express = require('express')
const path = require('path')
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())


const {
    fetchStory,
    getPost,
    loadFeed,
    login,
    register,
    postStory
} = require('./controller')

// REGISTER
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.js"))
})
app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.css"))
})

// HOME
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'))
})
app.get('/homejs', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.js'))
})
app.get('/homeCss', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.css"))
})
// STORY
app.get('/storypage', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/story.html'))
})
app.get('/storyjs', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/storyjs.js'))
})
app.get('/qrcode', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/qrcode.js'))
})
// FEED
app.get('/feed', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/feed.html'))
})
app.get('/feedjs', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/feed.js'))
})

app.get(`/api/fetchStory/:id`, fetchStory)
app.get(`/api/posts/:id`, getPost)
app.get('/api/loadFeed', loadFeed)
app.post(`/api/login`, login)
app.post('/api/register', register)
app.post('/api/postStory', postStory)

app.listen(4747, () => console.log("i have a crush on port 4747"))
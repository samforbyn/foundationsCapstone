const storyForm = document.getElementById('storyForm')
const story = document.getElementById('story')
const viewBtn = document.getElementById("viewSlice")
const baseURL = 'http://localhost:4747/api'
let post_num = 0

const postStory = body => axios.post(`${baseURL}/postStory`, body)
    .then(res => {
        console.log(res.data)
        post_num = res.data.story_id
        console.log(post_num)
        window.localStorage.setItem('postNumber', post_num)
    }).catch(err => {
        console.log(err)
        alert("error posting")
    })

const viewSlice = ()=> axios.get(`${baseURL}/posts/${post_num}`)
    .then(res => {
     window.location.href = '/storypage'
    }).catch(err => {
        console.log(err)
        alert("error viewing")
    })
    
function sendStory(e) {
    e.preventDefault()
    // Save to Local Storage
    // window.localStorage.setItem('user story', story.value)
    // allStories.push(story.value)
    // console.log(allStories)
    let storyVal = story.value
    let bodyObject = {
        userStory: storyVal,
        story_id: 0
    }
    // console.log(bodyObject)
    postStory(bodyObject)
    alert("Posted Successfully")
    viewBtn.classList.remove("hide")
    story.value = ''

}

viewBtn.addEventListener("click", viewSlice)
storyForm.addEventListener('submit', sendStory)


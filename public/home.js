const storyForm = document.getElementById('storyForm')
const story = document.getElementById('story')
const viewBtn = document.getElementById("viewSlice")
const baseURL = 'http://localhost:4747/api'

const postStory = body => axios.post(`${baseURL}/postStory`, body)
    .then(res => {
        alert("Posted Successfully")
    }).catch(err => {
        console.log(err)
        alert("error posting")
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


storyForm.addEventListener('submit', sendStory)


const storyForm = document.getElementById('storyForm')
const story = document.getElementById('story')

const allStories = []

function sendStory(e) {
    e.preventDefault()
    window.localStorage.setItem('user story', story.value)
    allStories.push(story.value)
    console.log(allStories)
}


storyForm.addEventListener('submit', sendStory)
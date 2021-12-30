const storyFeed = document.getElementById("storyFeed")
const baseURL = 'http://localhost:4747/api'


const loadFeed = () => axios.get(`${baseURL}/loadFeed`)
    .then(res => {
        console.log(res.data)
        console.log("hello")
        createFeedCard(res.data)
    }).catch(err => {
        console.log(err)
    })

    function createFeedCard(data) {
        console.log(data)
        storyFeed.innerHTML = ''
        for(let i = 0; i < data.length; i++){

            const userCard = document.createElement('div')
            userCard.classList.add('user-card')
            
            userCard.innerHTML = `<p class="storyID">story_id: ${data[i].story_id}</p>
            <p class="uStory">userStory: ${data[i].userStory}</p>
            `
            
            
            storyFeed.appendChild(userCard)
        }
    }



    document.body.onload = loadFeed()

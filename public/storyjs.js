const story = document.getElementById("ustory")
const qrBtn = document.getElementById("getQR")
const qrcode = document.getElementById("code")
const baseURL = 'http://localhost:4747/api'

// storyh2.innerText += window.localStorage.getItem('user story')

// const udata = document.getElementById("ustory")
// const qrcode = new QRCode(document.getElementById("code"), {
    // text: "www.samforbyn.com",
    // width: 128,
    // height: 128,
    // colorDark : "#5868bf",
    // colorLight : "#ffffff",
    // correctLevel : QRCode.CorrectLevel.H
    // })
    
    let thisPost = window.localStorage.getItem('postNumber')
    let data =[]
    const fetchStory = () => axios.get(`${baseURL}/fetchStory/${thisPost}`)
    .then(res => {
        console.log(res.data)
        story.innerHTML += res.data.story
        data.push(story.innerText)
        story.innerHTML += res.data.number
    }).catch(err => {
        console.log(err)
    })
    
    
    
    qrBtn.addEventListener('click', () =>{
        // data = window.location.href
        const newQR = new QRCode(document.getElementById("code"), {
            text: data[0],
            width: 128,
            height: 128,
            colorDark : "#5868bf",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        })
        qrBtn.style.display = 'none'
    })
 
window.onload = fetchStory
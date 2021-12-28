const storyh2 = document.getElementById("ustory")
const qrBtn = document.getElementById("getQR")
const qrcode = document.getElementById("code")
// document.body.addEventListener('load', () => {
    
// })
storyh2.innerText += window.localStorage.getItem('user story')

const udata = document.getElementById("ustory")
// const qrcode = new QRCode(document.getElementById("code"), {
    // text: "www.samforbyn.com",
    // width: 128,
    // height: 128,
    // colorDark : "#5868bf",
    // colorLight : "#ffffff",
    // correctLevel : QRCode.CorrectLevel.H
// })

let allQRs = []

qrBtn.addEventListener('click', () =>{
    let data = udata.textContent
    const newQR = new QRCode(document.getElementById("code"), {
        text: data,
        width: 128,
        height: 128,
        colorDark : "#5868bf",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    })
})

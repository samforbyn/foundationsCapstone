const registerForm = document.getElementById("register")
const loginForm = document.getElementById("login")
const loginCard = document.getElementById("loginCard")
const logo = document.getElementById("logo")
// const regBtn = document.querySelector("#regBtn")
// const loginBtn = document.querySelector("#loginBtn")

const baseURL = 'http://localhost:4747/api'

const login = body => axios.post(`${baseURL}/login`, body)
    .then(res => {
        window.location.href = '/home'
    }).catch(err => {
        console.log(err)
        alert("Invalid - Please try again.")
    })

const register = body => axios.post(`${baseURL}/register`, body)
    .then(res => {
        console.log(res.data)
        console.log(res.data.username)
        makeLoginCard(res.data)
    }).catch(err => {
        console.log(err)
        alert("Error registering user")
    })
    
    function makeLoginCard(data){
    logo.style.display = 'none'
    registerForm.style.display = 'none'
    let uname = data.username
    console.log(uname)
    loginCard.innerHTML = `<h1> Thanks for registering, ${uname}</h1>`

}

function loginFunction(e) {
    e.preventDefault()
    let username = document.getElementById("login-username")
    let password = document.getElementById("login-password")
    
    let bodyObject = {
        username: username.value,
        password: password.value
    }

    login(bodyObject)
  

    username.value = ''
    password.value = ''
}

function registerFunction(e) {
    e.preventDefault()

    let username = document.querySelector('#register-username')
    let email = document.querySelector('#register-email')
    let firstName = document.querySelector('#register-firstName')
    let lastName = document.querySelector('#register-lastName')
    let password = document.querySelector('#register-password')
    let password2 = document.querySelector('#register-password-2')


    if(username.value === ''|| email.value === '' || firstName.value === '' || lastName.value === '' || password.value === '' || password2.value === ''){
        alert("All fields must be filled")
    }
    if(password.value !== password2.value){
        alert("Your passwords need to match!")
    }

    let bodyObject = {
        username: username.value,
        email: email.value,
        firstName: firstName.value,
        lastName: lastName.value,
        password: password.value
    }
    // console.log(bodyObject)

    register(bodyObject)

    

    username.value = ''
    email.value = ''
    firstName.value = ''
    lastName.value = ''
    password.value = ''
    password2.value = ''
}

loginForm.addEventListener('submit', loginFunction)
registerForm.addEventListener('submit', registerFunction)
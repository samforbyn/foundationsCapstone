const registerForm = document.getElementById("register")
const loginForm = document.getElementById("login")
// const regBtn = document.querySelector("#regBtn")
// const loginBtn = document.querySelector("#loginBtn")

const baseURL = 'http://localhost:4747/api'

const login = body => axios.post(`${baseURL}/login`, body)
    .then(res => {
        alert('Successful Log In')
    }).catch(err => {
        console.log(err)
        alert("no bozos allowed, ya bozo")
    })

const register = body => axios.post(`${baseURL}/register`, body)
    .then(res => {
        alert("Successfully registered")
    }).catch(err => {
        console.log(err)
        alert("BOZO ALERT, WE HAVE A BOZO ON THE LOOSE")
    })

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
    console.log(bodyObject)

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
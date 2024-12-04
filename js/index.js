var loginEmail = document.querySelector("#loginEmail")
var loginPassword = document.querySelector("#loginPassword")
var loginButton = document.querySelector("#loginButton")
var signUpA = document.querySelector(".sign-up-a") 
var signUpName = document.querySelector("#signUpName") 
var signUpEmail = document.querySelector("#signUpEmail") 
var signUpPassword = document.querySelector("#signUpPassword") 
var signInA = document.querySelector(".signin-a")
var signUpButton = document.querySelector("#signUpButton")
var successP = document.querySelector(".successP")
var failP = document.querySelector(".failP")
var logOutButton = document.querySelector("#logOutButton")
var theUserName = document.querySelector("#theUserName")
var loginPage = document.querySelector("#login-page")
var signupPage = document.querySelector("#signUp-page")
var signupTestShow = document.querySelector('.signupTestShow')
var loginTextShow = document.querySelector(".loginTextShow")
var mainContent = document.querySelector(".main-content")
var mainNav = document.querySelector(".main-page-nav")

signUpA.addEventListener("click", function (e) {
    clearForm(e)
    loginPage.parentElement.classList.add("d-none")
    signupPage.parentElement.classList.remove("d-none")

})
signInA.addEventListener("click", function (e) {
    clearForm(e)
    loginPage.parentElement.classList.remove("d-none")
    signupPage.parentElement.classList.add("d-none")
    

})
logOutButton.addEventListener("click", function (e) {
    mainContent.parentElement.classList.add("d-none")
    mainNav.classList.add("d-none")
    loginPage.parentElement.classList.remove("d-none")
})
signUpButton.addEventListener("click", function (e) {
    if (signUpName.value == "" || signUpEmail.value == "" || signUpPassword.value == "") {
        failP.classList.remove("d-none")

    } else if (localStorage.getItem(signUpEmail.value) != undefined) {
        signupTestShow.innerText = "Email already exicted"
        signupTestShow.classList.remove("d-none")
        failP.classList.add("d-none")
        successP.classList.add("d-none")
        clearForm(e)
    } else {
        var users = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value,
        }
        localStorage.setItem(`${signUpEmail.value}`, JSON.stringify(users))
        successP.classList.remove("d-none")
        failP.classList.add("d-none")
        signupTestShow.classList.add("d-none")
        clearForm(e)
    }
})

function clearForm(s) {
    var info = s.target.parentElement.children
    for (let i = 0; i < info.length; i++) {
        if (info[i].tagName == "INPUT") {
            info[i].value = ""
        }
    }
}
loginButton.addEventListener("click", function (e) {
    if (loginEmail.value == "" || loginPassword.value == "") {
        loginTextShow.innerText = "please enter your email and password"
        loginTextShow.classList.remove("d-none")
    } else if (localStorage.getItem(`${loginEmail.value}`) != undefined && JSON.parse(localStorage.getItem(`${loginEmail.value}`)).password != loginPassword.value ) {
        loginTextShow.innerText = "Wrong Password"
        loginTextShow.classList.remove("d-none")
        
    }else if (localStorage.getItem(`${loginEmail.value}`) == undefined && loginPassword.value != "") {
        loginTextShow.innerText = "Email doesn't exict"
        loginTextShow.classList.remove("d-none")
    }else {
        loginPage.parentElement.classList.add("d-none")
        theUserName.innerText = `${JSON.parse(localStorage.getItem(`${loginEmail.value}`)).name}`
        mainContent.parentElement.classList.remove("d-none")
        mainNav.classList.remove("d-none")
        clearForm(e)
        loginTextShow.classList.add("d-none")
    }
})

const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".pass-input");
const usernameMSG = document.querySelector(".username-msg");
const passwordMSG = document.querySelector(".password-msg");
const signinMSG = document.querySelector(".signin-status");
const signinBtn = document.querySelector(".signin-button");

signinBtn.addEventListener("click", signIn);
function signIn(event) {
    event.preventDefault();
    // usernameMSG.innerText = "";
    // passwordMSG.innerText = "";
    // console.log("sign in");
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;
    // console.log(usernameValue, passwordValue);
    let ifSendData = true;
    if (
        usernameValue.length === 0 || 
        usernameValue.indexOf("@") === -1 || 
        usernameValue.indexOf(".") === -1
        ) {
        usernameMSG.innerText = "please enter a valid email !";
        ifSendData = false;
    }
    if (passwordValue.length === 0) {
        passwordMSG.innerText = "please enter your password !";
        ifSendData = false;
    } else if (passwordValue.length <= 4 ) {
        passwordMSG.innerText = "your password is too short !"
        ifSendData = false;
    }
    if (ifSendData) {
        // console.log("send data to server");
        const body = JSON.stringify({
            username: usernameValue,
            password: passwordValue,
        });
        const headers = {
            "content-type" : "application/json",
        };
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            body:body,
            headers:headers,
        })
        .then((response) => {
            if(response.ok){
                signinMSG.innerText = "ok";
            }
        });
    }
}








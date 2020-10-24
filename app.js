const auth_btn = document.querySelector(".auth");
const html = document.querySelector("html")
const body = document.querySelector("body")
const popup = document.querySelector(".sign_in-popup")
const auth_page = document.querySelector('.sign_in-container')
const reg_page = document.querySelector('.sign_up-container')
const switch_btn = document.querySelectorAll('.switch_btn')
const signInBtns = [...switch_btn].filter(item => item.classList.contains("sign-in"))
const signUpBtns = [...switch_btn].filter(item => item.classList.contains("sign-up"))


auth_btn.addEventListener("click", () => {
    popup.style.visibility = "visible";
    body.style.overflowY = "hidden"
    html.style.overflowY = "hidden"
});

popup.addEventListener("click", (e) => {
    if(e.target.className === "sign_in-popup"){
        popup.style.visibility = "hidden";
        body.style.overflowY = "visible"
        html.style.overflowY = "visible"
    }
});

[...switch_btn].map(item => item.addEventListener("click", (e) => {
    console.log(e.target.classList.contains(".sign_in"))
    console.log(e.target.classList.contains("sign-in"))
    if(e.target.classList.contains("sign-in") && e.target.className !== "active") {
        reg_page.style.display = "none";
        auth_page.style.display = "block";   
        signInBtns.map(item => item.classList.add("active"))
        signUpBtns.map(item => item.classList.remove("active"))
    }
    else if (e.target.classList.contains("sign-up") && e.target.className !== "active") {
        reg_page.style.display = "block";
        auth_page.style.display = "none";   
        signUpBtns.map(item => item.classList.add("active"))
        signInBtns.map(item => item.classList.remove("active"))
    }
}));
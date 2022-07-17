const loginForm = document.getElementById("input-name");
const loginInput = document.querySelector("#input-name input");
const welcome = document.querySelector(".welcome");


function submitName(event){
    event.preventDefault();
    loginInput.classList.add("hidden");
    const userName = loginInput.value;
    
    
    welcome.innerText = `${userName}님 환영합니다.`;
    welcome.classList.remove("hidden");
    
    localStorage.setItem("User", userName);
}

loginForm.addEventListener("submit", submitName);

const user = document.querySelector(".user");
const time = document.querySelector(".time");

function timeCount(){
    const now = new Date();
    const month = String(now.getMonth()+1).padStart(2,"0");
    const date = String(now.getDate()).padStart(2,"0");
    const hours = String(now.getHours()).padStart(2,"0");
    const minutes = String(now.getMinutes()).padStart(2,"0");
    const seconds = String(now.getSeconds()).padStart(2,"0");

    time.innerText = `${month}/${date} ${hours}시 ${minutes}분 ${seconds}초`;
}

setInterval(timeCount, 1000);
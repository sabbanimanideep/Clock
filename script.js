const secondshand = document.querySelector("#seconds");
const minutehand = document.querySelector("#minutes");
const hourhand = document.querySelector("#hours")

function setDate() {
    const now = new Date();
    const second = now.getSeconds();
    secondsdeg = ((second / 60) * 360) + 90;
    secondshand.style.transform = `rotate(${secondsdeg}deg)`;
    //console.log(second);

    const minutes = now.getMinutes();
    minutesdeg = ((minutes / 60) * 360) + 90;
    minutehand.style.transform = `rotate(${minutesdeg}deg)`;

    const hour = now.getHours();
    hourdeg = ((minutes / 60) * 360) + 90;
    hourhand.style.transform = `rotate(${hourdeg}deg)`;
    console.log(hour, minutes, second);


}

setInterval(setDate, 1000);
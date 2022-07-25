const divTime = document.querySelector('.notif-time');

function showTIme() {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    minute = minute < 10 ? "0" + minute : minute;
    let currentTime = hour + ':' + minute;
    divTime.textContent = currentTime;
}

setInterval(showTIme, 1000);

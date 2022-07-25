const divTime = document.querySelector('.notif-time');

function showTIme() {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let currentTime = hour + ':' + minute;
    divTime.innerHTML = currentTime;
}

setInterval(showTIme, 1000);




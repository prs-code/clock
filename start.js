

function showClock() {
    let data = new Date();
    let hour = data.getHours ();
    let minute = data.getMinutes ();
    let second = data.getSeconds ();
    let session = "am";

    if ( hour === 0) {
        hour = 12;
    }
    if ( hour > 12) {
        hour =  hour - 12;
        session = "pm";
    }
    hour = (hour < 10) ? `0${hour}` : hour;
    minute = (minute < 10) ? `0${minute}` : minute;
    second = (second < 10) ? `0${second}` : second;

    document.querySelector(".Hour").innerText = hour;
    document.querySelector(".Minute").innerText = minute;
    document.querySelector(".secend").innerText = second;
    document.querySelector(".am-pm").innerText = session;
};

setInterval(showClock, 1000);

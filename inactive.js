const user = {
    name: "Qasim Asad",
    age: "25",
    city: "san francisco",
    lastActivity: new Date().getTime()
}

const inactiveFirstStage = () => {
    console.log("User has been inactive for the past 1-2 minutes");
}

const inactiveSecondStage = () => {
    console.log("User has been inactive for the past 3-4 minutes");
}

const inactiveThirdStage = () => {
    console.log("User has been inactive for the past 5-6 minutes");
}

var counter = 0;
// this is the main method that acts like a worker and runs every 1 minute
setInterval(function () {
    // please write your code here

    let timeInMins = Math.round((new Date().getTime() - user.lastActivity) / 1000 / 60);
    timeInMins %= 6;

    if (timeInMins <= 2)
        inactiveFirstStage();
    else if (timeInMins <= 4)
        inactiveSecondStage();
    else if (timeInMins <= 6)
        inactiveThirdStage();


}, 60000);
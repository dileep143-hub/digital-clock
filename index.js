function displayAlert() {
    const siteTiltle = document.querySelector("#site-title");
    console.log("sitetitle",siteTile);
    const siteTileById = document.getElementById("site-title");
    console.log("siteTitleById",siteTitleById);
    const siteTitleByTagNmae = document.getelementByTagNmae("h2")[0];
    console.log("sitetitleByTagName",siteTitleByTagNmae);
    siteTitle.innertext = "current time";
}

setTimeout(displayAlert,4000);


function displayTime() {
    const currentDate = new Date();
    console.log("Function to display time",currentDate);
    const currentTime = document.querySelector("#current-time");
   currentTime.innerText = currentDate.toLocaleString("en-us",{
       hour: "numeric",
       minute: "numeric",
       second: "numeric",
       hour12: true,

   });
}
const timer = setInterval(displayTime,1000);
function stopclock() {
    clearInterval(timer);
}

//displayTime();






var load = 0;
var index = 0;
var isStarted = false;
var isDestroyed = false;
var now = new Date(Date.now());
var age = now.getFullYear() - 2008;
if(now.getMonth() < 11 || now.getDate() < 18) age--;
var contents = [
  ["Delve Delos Santos Jr.", "Web Developer"],
  [age + " years old", "My Age (automatically updated)"],
  ["Philippines, Laguna", "My Location"],
  ["JavaScript, PHP, Java, Python", "Programming Languages"],
  ["github.com/dlvdls18", "My GitHub Account"],
  ["replit.com/@dlvdls18", "My Replit Account"],
  ["dlvdls18@gmail.com", "Email me at"],
  ["Focused at studying", "I'm busy right now"],
  ["Midnights become my afternoons", "Taylor Swift"],
  ["That stickman never stop walking", "Last message"]
];

var elStart = document.getElementById("start");
var elContentBody = document.getElementById("content-body");
var elTitle = document.getElementById("title");
var elSubtitle = document.getElementById("subtitle");
var elGroundWrapper = document.getElementById("ground-wrapper");
var elBackgroundWrapper = document.getElementById("background-wrapper");
var elAudio = document.getElementById("audio");

function OnLoad() {
  elStart.innerHTML = "Click to start ^^<br>Double click to quit";
  document.body.onclick = OnStart;
}

function OnStart() {
  if(isStarted) return;
  isStarted = true;
  elStart.style.opacity = 0;
  elContentBody.classList.add("start");
  elAudio.play();
  OnUpdate();
}

function OnUpdate() {
  if(isDestroyed) return;
  var title = contents[index][0];
  var subtitle = contents[index][1];
  elTitle.innerText = title;
  elSubtitle.innerText = subtitle;
  index = index == contents.length - 1 ? 0 : index + 1;
  setTimeout(OnUpdate, 15000);
}

function OnDestroy() {
  if(!isStarted || isDestroyed) return;
  elAudio.pause();
  elStart.style.opacity = 1;
  elStart.innerText = "Bye bye ^^";
  isDestroyed = true;
}

document.querySelectorAll("img").forEach(function(el) {
  el.onload = function() {
    load++;
    if(load == 7) OnLoad();
  }
});

setTimeout(function() {
  if(load != 7) OnLoad();
}, 2000);

setTimeout(function() {
  elGroundWrapper.remove();
  elBackgroundWrapper.remove();
}, 5000);

document.body.ondblclick = OnDestroy;
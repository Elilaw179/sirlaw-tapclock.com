document.addEventListener("DOMContentLoaded", function () {
  let backIcon = document.getElementById("backicon");
  backIcon.addEventListener("click", function () {
    window.location.href = "index.html";
  });
});

let task = document.getElementById('task');
task.addEventListener('click', ()=>{

  window.location.href='task.html'
});

let boostBnt=document. getElementById('boost')
boostBnt.addEventListener('click', ()=>{
  window.location.href='task.html'
});

let stat = document.getElementById('stat')
stat.addEventListener('click', ()=>{
  window.location.href='statistics.html'
})

let button = document.getElementById("btn");
let countElement = document.getElementById("count");
let p = document.getElementById("level");

let progressContainer = document.getElementById("progress-container");
let progressBar = document.getElementById("progress-bar");
let remainingValue = document.getElementById("remaining-value");

p.innerHTML = "🕐Novice";

let counts = 1000;
let decrement = 100;
let tapValue = 5;
const maxDecrement = 100;

progressBar.style.width = (decrement / maxDecrement) * 100 + "%";

button.addEventListener("click", (event) => {
  if (decrement > 0) {
    decrement -= 5;
    counts += 5;
    countElement.innerHTML = "$" + counts;
    remainingValue.innerHTML = decrement;
    let progressBarWidth = Math.max(0, (decrement / maxDecrement) * 100);
    progressBar.style.width = progressBarWidth + "%";

    let animatedCount = document.createElement("span");
    animatedCount.className = "animated-count";
    animatedCount.innerHTML = "+" + tapValue;

    let buttonRect = button.getBoundingClientRect();
    animatedCount.style.left = buttonRect.right + "px";
    animatedCount.style.top = buttonRect.top + "px";

    document.body.appendChild(animatedCount);

    animatedCount.addEventListener("animationend", () => {
      animatedCount.remove();
    });

    if (counts > 1160) {
      p.innerHTML = "⏱Master";
    } else if (counts > 1140) {
      p.innerHTML = "⌛Expert";
    } else if (counts > 1120) {
      p.innerHTML = "⏰Warrior";
    } else if (counts > 1100) {
      p.innerHTML = "⏳Veteran";
    } else if (counts > 1080) {
      p.innerHTML = "🕰️Challenger";
    } else if (counts > 1060) {
      p.innerHTML = "⌚Apprentice";
    }

    if (decrement <= 0) {
      setTimeout(() => {
        decrement = maxDecrement;
        remainingValue.innerHTML = decrement;
        progressBar.style.transition = "width 0.3s ease";
        progressBar.style.width = "100%";

        setTimeout(() => {
          progressBar.style.transition = "width 0.3s ease";
        }, 1000);
      }, 500);
    }
  }
});

let referral = document.getElementById("ref");
referral.addEventListener("click", () => {
  window.location.href = "referrals.html";
});

function myFunction() {
  let copyText = document.getElementById("myInput").innerText;
  navigator.clipboard
    .writeText(copyText)
    .then(() => {
      alert("Copied");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}


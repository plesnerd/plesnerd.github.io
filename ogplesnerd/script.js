let nerd = localStorage.getItem("nerd") ? parseFloat(localStorage.getItem("nerd")) : 0;
let upgradeCount = localStorage.getItem("upgradeCount") ? parseInt(localStorage.getItem("upgradeCount")) : 0;
const scoreElement = document.getElementById("score");
const nerdImage = document.getElementById("nerd-image");
let upgradeInterval;

updateScore();


nerdImage.addEventListener("click", increaseScore);

if (upgradeCount > 0) {
  startUpgradeInterval(upgradeCount);
}

function startUpgradeInterval(upgrades) {
  upgradeInterval = setInterval(() => {
    nerd += upgrades * 0.5;
    updateScore();
    localStorage.setItem("nerd", nerd);
  }, 1000);
}

function increaseScore() {
  nerd++;
  updateScore();
  localStorage.setItem("nerd", nerd);
}

function buyItem(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    if (price === 50) {
      upgradeCount++;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    }
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}

function updateScore() {
  scoreElement.textContent = `nerd: ${nerd}`;
}

function buyBucketNerd(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    if (price === 50) {
      upgradeCount++;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    } else if (price === 1500) {
      upgradeCount +=4; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    }
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}
audioElement.play();


function startUpgradeInterval(upgrades) {
  if (upgradeInterval) {
    clearInterval(upgradeInterval);  
  }
  upgradeInterval = setInterval(() => {
    nerd += upgrades * 0.5; 
    updateScore();
    localStorage.setItem("nerd", nerd);
  }, 1000);
}
function buyCrateNerd(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    if (price === 50) {
      upgradeCount++;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    } else if (price === 20000) {
      upgradeCount +=20; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    }
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}

const audio = new Audio("plesnerd.wav");
audio.loop = true;
audio.play();

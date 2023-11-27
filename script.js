let nerd = localStorage.getItem("nerd") ? parseFloat(localStorage.getItem("nerd")) : 0;
let upgradeCount = localStorage.getItem("upgradeCount") ? parseInt(localStorage.getItem("upgradeCount")) : 0;
let npc = localStorage.getItem("npc") ? parseInt(localStorage.getItem("npc")) : 1;
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
  nerd += npc;
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



function buyVanNerd(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    if (price === 50) {
      upgradeCount++;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    } else if (price === 100000) {
      upgradeCount +=100; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    }
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}
function buyYachtNerd(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    if (price === 50) {
      upgradeCount++;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    } else if (price === 1000000) {
      upgradeCount +=200; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    }
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}
function buyMansionNerd(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    if (price === 50) {
      upgradeCount++;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    } else if (price === 10000000) {
      upgradeCount +=1000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    }
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}
function buyIslandNerd(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    if (price === 50) {
      upgradeCount++;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    } else if (price === 100000000) {
      upgradeCount +=10000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    }
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}
function buyCountryNerd(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    if (price === 50) {
      upgradeCount++;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    } else if (price === 1000000000) {
      upgradeCount +=20000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    }
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}
function buyContinentNerd(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    if (price === 50) {
      upgradeCount++;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    } else if (price === 10000000000) {
      upgradeCount +=200000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    }
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}
function buyWorldNerd(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    if (price === 50) {
      upgradeCount++;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    } else if (price === 100000000000) {
      upgradeCount +=1000000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    }
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}

function buySolarNerd(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    if (price === 50) {
      upgradeCount++;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    } else if (price === 1000000000000) {
      upgradeCount +=2000000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    }
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}
function buyGalaxyNerd(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    if (price === 50) {
      upgradeCount++;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    } else if (price === 1000000000000) {
      upgradeCount +=2000000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    }
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}
function buyGalaxyClusterNerd(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    if (price === 50) {
      upgradeCount++;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    } else if (price === 10000000000000) {
      upgradeCount +=10000000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    }
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}
function buyUniverseNerd(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    if (price === 50) {
      upgradeCount++;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    } else if (price === 10000000000000) {
      upgradeCount +=100000000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    }
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}
function buyMultiverseNerd(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    if (price === 50) {
      upgradeCount++;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    } else if (price === 10000000000000) {
      upgradeCount +=1000000000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    }
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}
function buyOmniverseNerd(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    if (price === 50) {
      upgradeCount++;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    } else if (price === 100000000000000) {
      upgradeCount +=10000000000000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    }
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}
function buyBeyondNerd(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    if (price === 50) {
      upgradeCount++;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    } else if (price === 100000000000000) {
      upgradeCount +=10000000000000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    }
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}



function buyExtraFinger(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    npc += 1;
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}
function buyExtraHand(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    npc += 5;
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // The responce is in the cache
        if (response) {
          return response;
        }

        // No cache match, we attempt to fetch it from the network
        return fetch(event.request);
      }
    )
  );
});

document.addEventListener('DOMContentLoaded', function() {
  const sayings = [
    "Slides",
    "wolf den pizza!",
    "read the room",
    "coming to a store near you",
    "closet productions",
    "ISpyWithMyLittleRye",
    "yakoob",
    "playing games?",
    "better than cookie clicker",
    "console port when??",
    "free trial ends in 1:34",
    "We Live, We Love, We Lie",
    "ples nerd!!!",
    "gigachad",
    "ples nerd mindset",
    "lore?",
    "give nerd!!!!!",
    "Roblox ples nerd?",
    "open up google classroom",
    "add to home screen",
    "why are you running",
    "travis kelsey is a traitor",
    "oh no you don’t",
    "proszę cukierki",
    "pneumonoultramicroscopicsilicovolcanoconiosis",
    "OG fortnite???",
    "If you see this take a screenshot",
    "when imposter is ples nerd",
    "stop playing games!!!",
    "ples give infinite nerds!!",
    "Bee Movie Script: According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground.  The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second. Hello?  - Barry?- Adam?- Oan you believe this is happening?- I can't. I'll pick you up. Looking sharp. Use the stairs. Your father paid good money for those. Sorry. I'm excited. Here's the graduate. We're very proud of you, son. A perfect report card, all B's. Very proud. Ma! I got a thing going here. - You got lint on your fuzz. - Ow! That's me! - Wave to us! We'll be in row 118,000. - Bye! Barry, I told you, stop flying in the house!- Hey, Adam. - Hey, Barry. - Is that fuzz gel? - A little. Special day, graduation. Never thought I'd make it.",
    "5, 3, 3, 4, 2, 2",
    "you broke his phone",
    "yes",
    "no",
    "maybe so",
    "DJ Khaled",
    "we the best music",
 "Avada Kedavra!",
    "flamingo",
    "I'm loving it!",
     "who are you???",
     "flavor update june 2070",
     "erm actually... 🤓",
     "What are those??",
    "As seen on TV!"
  ];

  const splashText = document.getElementById('splash-text');
  splashText.textContent = sayings[Math.floor(Math.random() * sayings.length)];
});
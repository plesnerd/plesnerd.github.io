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
alert ("Acounts are coming soon. Stay tuned for more updates. All data saved in browser (current nerds) will be lost (sorry) -bluebay")
//upgrades
function buyItem(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    if (price === 50) {
      upgradeCount++;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

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
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

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
      upgradeCount +=2000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

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
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

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
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

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
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

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
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

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
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

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
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

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
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

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
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

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
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

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
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

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
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

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
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

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
    } else if (price === 1000000000000000) {
      upgradeCount +=99999999999999999999999999999999999999999999; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

    }
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}
function buyHolidayNerd(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    if (price === 50) {
      upgradeCount++;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    } else if (price === 200000) {
      upgradeCount +=80000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

    }
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}
function buyPresentNerd(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    if (price === 50) {
      upgradeCount++;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    } else if (price === 1000000) {
      upgradeCount +=800000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

    }
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}


//clicking upgrades
function buyExtraFinger(price) {
  if (nerd >= price) {
    nerd -= price;
    npc += 1;
    updateScore();
    localStorage.setItem("nerd", nerd);
    localStorage.setItem("npc", npc); 
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

  } else {
    alert("you don't have enough nerd to buy this item");
  }
}
function buyExtraHand(price) {
  if (nerd >= price) {
    nerd -= price;
    npc += 5;
    updateScore();
    localStorage.setItem("nerd", nerd);
    localStorage.setItem("npc", npc); 
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

  } else {
    alert("you don't have enough nerd to buy this item");
  }
}
function buyExtraPerson(price) {
  if (nerd >= price) {
    nerd -= price;
    npc += 10;
    updateScore();
    localStorage.setItem("nerd", nerd);
    localStorage.setItem("npc", npc); 
    confetti({
      particleCount: 1000,
      spread: 70,
      origin: { y: 0.6 },
    });

  

  } else {
    alert("you don't have enough nerd to buy this item");
  }
}
//idk what this is lol
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
//ples sayings
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
//snow

tsParticles.load("tsparticles", {
  autoPlay: true,
  background: {
    color: { value: "transparent" },
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
    opacity: 1,
  },
  backgroundMask: {
    composite: "destination-out",
    cover: { color: { value: "#fff" }, opacity: 1 },
    enable: false,
  },
  fullScreen: { enable: true, zIndex: 0 },
  detectRetina: true,
  duration: 0,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "window",
    events: {
      resize: true,
    },
  },
  motion: { disable: false, reduce: { factor: 4, value: true } },
  particles: {
    bounce: {
      horizontal: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
      vertical: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
    },
    collisions: {
      bounce: {
        horizontal: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
        vertical: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
      },
      enable: false,
      mode: "bounce",
      overlap: { enable: true, retries: 0 },
    },
    color: {
      value: "#fff",
      animation: {
        h: { count: 0, enable: false, offset: 0, speed: 1, sync: true },
        s: { count: 0, enable: false, offset: 0, speed: 1, sync: true },
        l: { count: 0, enable: false, offset: 0, speed: 1, sync: true },
      },
    },
    destroy: {
      mode: "none",
      split: {
        count: 1,
        factor: { random: { enable: false, minimumValue: 0 }, value: 3 },
        rate: {
          random: { enable: false, minimumValue: 0 },
          value: { min: 4, max: 9 },
        },
        sizeOffset: true,
      },
    },
    life: {
      count: 0,
      delay: {
        random: { enable: false, minimumValue: 0 },
        value: 0,
        sync: false,
      },
      duration: {
        random: { enable: false, minimumValue: 0.0001 },
        value: 0,
        sync: false,
      },
    },
    links: {
      blink: false,
      color: { value: "#ffffff" },
      consent: false,
      distance: 500,
      enable: false,
      frequency: 1,
      opacity: 1,
      shadow: { blur: 5, color: { value: "#00ff00" }, enable: false },
      triangles: { enable: false, frequency: 1 },
      width: 2,
      warp: false,
    },
    move: {
      angle: { offset: 0, value: 90 },
      attract: { distance: 200, enable: false, rotate: { x: 600, y: 1200 } },
      decay: 0,
      distance: {},
      direction: "bottom",
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50,
      },
      path: {
        clamp: true,
        delay: { random: { enable: false, minimumValue: 0 }, value: 0 },
        enable: false,
        options: {},
      },
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: false,
      size: false,
      speed: 2,
      spin: { acceleration: 0, enable: false },
      straight: false,
      trail: { enable: false, length: 10, fillColor: { value: "#000000" } },
      vibrate: false,
      warp: false,
    },
    number: {
      density: { enable: true, area: 800, factor: 1000 },
      limit: 0,
      value: 400,
    },
    opacity: {
      value: { min: 1, max: 1 },
      animation: {
        count: 0,
        enable: false,
        speed: 1,
        sync: false,
        destroy: "none",
        startValue: "random",
        minimumValue: 0.1,
      },
    },
    reduceDuplicates: false,
    repulse: {
      random: { enable: false, minimumValue: 0 },
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1,
    },
    roll: {
      darken: { enable: false, value: 0 },
      enable: false,
      enlighten: { enable: false, value: 0 },
      mode: "vertical",
      speed: 25,
    },
    rotate: {
      random: { enable: false, minimumValue: 0 },
      value: 0,
      animation: { enable: false, speed: 0, sync: false },
      direction: "clockwise",
      path: false,
    },
    shape: { type: "circle" },
    size: {
      random: { enable: true, minimumValue: 4 },
      value: { min: 4, max: 4 },
      animation: {
        count: 0,
        enable: false,
        speed: 40,
        sync: false,
        destroy: "none",
        startValue: "random",
        minimumValue: 0.1,
      },
    },
  },
  zLayers: 1,
});
function nerdChanged() {
  switch (nerd) {
    case nerd >= 1 && score <= 500: // greater than or equal to 1, or less than or equal to 500
      document.querySelector("div#rankIndicator").innerHTML=`dirt`
      break // so it doesn't get stuck (for good measure idk)
    case nerd >= 501 && score <= 10000:
      document.querySelector("div#rankIndicator").innerHTML=`metal`
      break
    // ...
    case nerd >= 10000001:
      document.querySelector("div#rankIndicator").innerHTML=`godlike`
    default: // for any other case, like if score is 0 (may be unnecessary bc if the score is 0, then it wouldn't have been changed yet) or somehow negative
      document.querySelector("div#rankIndicator").innerHTML=`none`
      break
  }
}

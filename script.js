let nerd = localStorage.getItem("nerd") ? parseFloat(localStorage.getItem("nerd")) : 0;
let upgradeCount = localStorage.getItem("upgradeCount") ? parseInt(localStorage.getItem("upgradeCount")) : 0;
let npc = localStorage.getItem("npc") ? parseInt(localStorage.getItem("npc")) : 1;
const scoreElement = document.getElementById("score");
const nerdImage = document.getElementById("nerd-image");
const upgradeCountElement = document.getElementById("upgradeCount");
let upgradeInterval;

updateScore();
updateUpgradeCount();

nerdImage.addEventListener("click", increaseScore);

if (upgradeCount > 0) {
  startUpgradeInterval(upgradeCount);
}

function updateScore() {
  scoreElement.textContent = `nerd: ${nerd.toFixed(2)}`;
}

function increaseScore() {
  nerd += npc;
  updateScore();
  updateUpgradeCount();
  localStorage.setItem("nerd", nerd);
}

function startUpgradeInterval(count) {
  clearInterval(upgradeInterval);
  upgradeInterval = setInterval(() => {
    nerd += count; 
    updateScore();
    updateUpgradeCount();
    localStorage.setItem("nerd", nerd);
  }, 1000); 
}

function updateUpgradeCount() {
  upgradeCountElement.textContent = `per second: ${Math.floor(upgradeCount / 2)}`; // Display half of the upgrade count
}


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
      updateUpgradeCount();
     

      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

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
    } else if (price === 750) {
      upgradeCount +=40; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      updateUpgradeCount();

      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

    }
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}
function buyHandfullNerd(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    if (price === 50) {
      upgradeCount++;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    } else if (price === 55) {
      upgradeCount +=2; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      updateUpgradeCount();

      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

    }
  } else {
    alert("you don't have enough nerd to buy this item");
  }
}

function buyBoxNerd(price) {
  if (nerd >= price) {
    nerd -= price;
    updateScore();
    localStorage.setItem("nerd", nerd);
    if (price === 50) {
      upgradeCount++;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
    } else if (price === 300) {
      upgradeCount +=20; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      updateUpgradeCount();

      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

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
      updateUpgradeCount();

      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

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
      upgradeCount +=25000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      updateUpgradeCount();

      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

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
      upgradeCount +=40000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      updateUpgradeCount();

    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
    };

    function shoot() {
      confetti({
        ...defaults,
        particleCount: 30,
        scalar: 1.2,
        shapes: ["emoji"],
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
      });

      confetti({
        ...defaults,
        particleCount: 20,
        scalar: 2,
        shapes: ["emoji"],
        shapeOptions: {
          emoji: {
            value: "🍁",
          },
        },
      });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
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
      upgradeCount += 5858585; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      updateUpgradeCount();

      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

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
      upgradeCount +=10000000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      updateUpgradeCount();
      const defaults = {
          spread: 360,
          ticks: 100,
          gravity: 0,
          decay: 0.94,
          startVelocity: 30,
        };

        function shoot() {
          confetti({
            ...defaults,
            particleCount: 30,
            scalar: 1.2,
            shapes: ["emoji"],
            colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
          });

          confetti({
            ...defaults,
            particleCount: 20,
            scalar: 2,
            shapes: ["emoji"],
            shapeOptions: {
              emoji: {
                value: "🍁",
              },
            },
          });
        }

       setTimeout(shoot, 0);
        setTimeout(shoot, 100);
        setTimeout(shoot, 200);

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
      upgradeCount +=10000000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      updateUpgradeCount();

      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

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
      upgradeCount +=20000000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      updateUpgradeCount();

      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

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
      upgradeCount +=100000000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      updateUpgradeCount();

      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

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
      upgradeCount +=2000000000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      updateUpgradeCount();

      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

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
      upgradeCount +=2000000000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      updateUpgradeCount();

      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

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
      upgradeCount +=100000000000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      updateUpgradeCount();

      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

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
      upgradeCount +=1000000000000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      updateUpgradeCount();

      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

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
      upgradeCount +=1000000000000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      updateUpgradeCount();

      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

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
      updateUpgradeCount();

      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

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
      upgradeCount +=1000000000000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      updateUpgradeCount();

      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

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
    } else if (price === 1000000000000000000) {
      upgradeCount *= 9999999;
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      updateUpgradeCount();

      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

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
      updateUpgradeCount();

      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

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
      upgradeCount +=40000; 
      localStorage.setItem("upgradeCount", upgradeCount);
      startUpgradeInterval(upgradeCount);
      updateUpgradeCount();

      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

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
   
    const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

    
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
   
    const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

    
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
   

    const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["emoji"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: "🍁",
            },
          },
        });
      }

     setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);

    

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
"top fiteen myseries solved by 4 chan",
"we miss you Ibrahim🫡",


    "As seen on TV!"
  ];

  const splashText = document.getElementById('splash-text');
  splashText.textContent = sayings[Math.floor(Math.random() * sayings.length)];
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
// Initially disable the gamble button
const gambleButton = document.getElementById('gambleButton');
gambleButton.disabled = true;

const betPercentageInput = document.getElementById('betPercentage');

// Function to validate bet percentage and toggle button state
function validateBetPercentage() {
    const betPercentage = betPercentageInput.value; // Get the raw input as a string
    const betPercentageNum = parseFloat(betPercentage);

    // Check if the input is a valid number, an integer, and within the allowed range
    if (!isNaN(betPercentageNum) && Number.isInteger(betPercentageNum) && betPercentageNum >= 0 && betPercentageNum <= 100) {
        gambleButton.disabled = false; // Enable button if valid
    } else {
        gambleButton.disabled = true; // Disable button if invalid
    }
}

// Add event listener to input field
betPercentageInput.addEventListener('input', validateBetPercentage);

// Gamble function
function gamble(betPercentage) {
    // Validate bet percentage
    if (betPercentage < 0 || betPercentage > 100) {
        alert("Invalid bet percentage.");
        return; // Exit the function if invalid
    }

    // Calculate and round up the bet amount
    const betAmount = Math.ceil(nerd * (betPercentage / 100));

    // Check if the bet amount is greater than zero
    if (betAmount <= 0) {
        alert("Bet amount must be greater than zero.");
        return; // Exit the function if invalid
    }

    // Generate a random number between 0 and 1
    const outcome = Math.random();

    // Determine win or lose (1/3 chance to win)
    if (outcome < (1 / 3)) {  // 1/3 chance
        nerd += betAmount;    // Win: double the bet
        alert(`You won! Your new score is ${nerd}.`);
    } else {  // 2/3 chance
        nerd -= betAmount;    // Lose: lose the bet amount
        alert(`You lost! Your new score is ${nerd}.`);
    }

    // Update the displayed score
    document.getElementById('score').textContent = nerd; 
}

// Event listener setup for gamble button
gambleButton.addEventListener('click', function() {
    const betPercentage = parseFloat(betPercentageInput.value);
    gamble(betPercentage); // Call gamble function with bet percentage
});

// Example of another function
function handleNetMessageClick() {
  if (msgClocks.length) {
    msgClocks.forEach((clock) => {
      clearTimeout(clock);
    });
    msgEl.innerHTML = genMsg(messages[msgCounter]);
    msgClocks = [];
  } else {
    if (msgCounter + 1 >= messages.length) return;
    msgCounter++;
    msgEl.innerHTML = "";

    while (eval(messages[msgCounter].condition) === false) {
      msgCounter++;
    }

    writingDelay(messages[msgCounter], msgEl, msgDelay);
  }
}

prettyLog("Initial Values", { fighters }, { weapons });

const armedFighters = fighters.map((fighter) => {
  // assign an unassigned wapon to the fighter
  let rndWapon;
  do {
    rndWapon = weapons[getRnd(0, weapons.length - 1)];
  } while (rndWapon.fighter);
  // assign fighter to wapon
  rndWapon.fighter = fighter.name;

  // return fighter with wapon and new power
  return {
    ...fighter,
    wapon: rndWapon.name,
    power: fighter.power + rndWapon.power,
  };
});

prettyLog("Weapon assigned", { armedFighters }, { weapons });

const trainedFighters = armedFighters.map((fighter) => {
  const newPower = fighter.power * getRnd(1, 100);
  return {
    ...fighter,
    newPower,
    modifier: newPower - fighter.power,
  };
});

prettyLog("After training", { trainedFighters }, { weapons });

const qualifiedFigther = trainedFighters.filter((fighter) => fighter.newPower >= 2000);

const newFighter = qualifiedFigther.length % 2 != 0;
if (newFighter) {
  qualifiedFigther.push(cpuFigther);
  console.warn("Nuovo partecipante");
}

prettyLog("After qualification", { qualifiedFigther }, { weapons });

qualifiedFigther.sort((a, b) => b.newPower - a.newPower);
const winner = qualifiedFigther[0];
const second = qualifiedFigther[1];
const last = qualifiedFigther[2];

prettyLog("podio", { winner }, { second }, { last });

const msgEl = document.getElementById("message");
let msgDelay = 40;
let msgClocks = [];
let msgCounter = 0;

writingDelay(messages[msgCounter], msgEl, msgDelay);
window.addEventListener("click", handleNetMessageClick);

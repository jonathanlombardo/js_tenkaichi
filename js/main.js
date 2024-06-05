function handleNetMessageClick() {
  if (msgClocks.length) {
    msgClocks.forEach((clock) => {
      clearTimeout(clock);
    });
    msgEl.innerHTML = genMsg(messages[msgCounter]);
    msgClocks = [];
    msgEl.scrollTop = msgEl.scrollHeight;
    toggleTriangle();
  } else {
    if (msgCounter + 1 >= messages.length) return;
    msgCounter++;
    msgEl.innerHTML = "";

    while (eval(messages[msgCounter].condition) === false) {
      msgCounter++;
    }

    writingDelay(msgEl, msgDelay);
  }
}

function toggleTriangle() {
  const isActive = triangleDown.classList.contains("active");
  isActive ? triangleDown.classList.remove("active") : triangleDown.classList.add("active");
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

const rounds = [];
let matchFigthers = [...qualifiedFigther];
let n = 0;

while (matchFigthers.length > 1) {
  const winners = [];
  const matches = [];
  for (let i = 0; i < matchFigthers.length; i += 2) {
    const homeFighter = matchFigthers[i];
    const awayFighter = matchFigthers[i + 1] ?? cpuFigther;

    let winner;
    let looser;

    winner = homeFighter.newPower >= awayFighter.newPower ? homeFighter : awayFighter;
    looser = homeFighter.newPower >= awayFighter.newPower ? awayFighter : homeFighter;

    const round = {
      name: matchFigthers.length == 2 ? "Finale" : matchFigthers.length == 4 || matchFigthers.length == 3 ? "Semifinale" : `${n + 1}a fase`,
      homeFighterName: homeFighter.name,
      awayFighterName: awayFighter.name,
      winnerName: winner.name,
      looserName: looser.name,
      homeFighter,
      awayFighter,
      winner,
      looser,
    };

    matches.push(round);
    winners.push(winner);
  }

  n++;
  rounds.push([...matches]);
  matchFigthers = [...winners];
  prettyLog(`Round${n}`, { matches });
}

const winner = rounds[rounds.length - 1][0].winner;
const second = rounds[rounds.length - 1][0].looser;
let last;

const semiFinalist1 = rounds[rounds.length - 2][0].looser;
const semiFinalist2 = rounds[rounds.length - 2][1].looser;
if (semiFinalist1.newPower > semiFinalist2.newPower) {
  last = semiFinalist1;
} else if (semiFinalist1.newPower < semiFinalist2.newPower) {
  last = semiFinalist2;
} else {
  last = semiFinalist1;
}

prettyLog("podio", { winner }, { second }, { last });

const msgEl = document.getElementById("message");
const triangleDown = document.getElementById("triangle-down");
let msgDelay = 40;
let msgClocks = [];
let msgCounter = 0;

toggleTriangle();
writingDelay(msgEl, msgDelay);
window.addEventListener("click", handleNetMessageClick);

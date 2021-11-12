const attackValue = 10;
const strongAttackValue = 17;
const monsterAttackValue = 14;
const healValue = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound() {
  const playerDamage = dealPlayerDamage(monsterAttackValue);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You Won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have a draw!');
  }
}

function attackMonster(mode) {
  let maxDamage;
  if (mode === 'attack') {
    maxDamage = attackValue;
  } else if (mode === 'strongAttack') {
    maxDamage = strongAttackValue;
  }

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
}

function attackHandler() {
  attackMonster('attack');
}

function strongAttackHandler() {
  attackMonster('strongAttack');
}

function healPlayerHandler() {
  let heal_Value;
  if (currentPlayerHealth >= chosenMaxLife - healValue) {
    alert("You can't heal to more than your max health");
    heal_Value = chosenMaxLife - currentPlayerHealth;
  } else {
    heal_Value = healValue;
  }
  increasePlayerHealth(heal_Value);
  currentPlayerHealth += heal_Value;
  endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);

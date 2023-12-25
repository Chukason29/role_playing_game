"use strict";
let xp = 0
let health = 5
let gold = 100
let currentWeapon = 0
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth")

const monsters = [
    {
      name: "slime",
      level: 2,
      health: 15
    },
    {
      name: "fanged beast",
      level: 8,
      health: 60
    },
    {
      name: "dragon",
      level: 20,
      health: 300
    }
]

const goToStore = () => {
    update(locations[1])
}
const goToCave = () => {
    update(locations[2])
}


const buyHealth = () => {
    if (gold >= 10){
        gold -= 10
        health += 10
        document.querySelector("#goldText").innerText = gold
        document.querySelector("#healthText").innerText = health
    }else{
        text.innerText = "You dont have enough money to buy"
    }
    
}
function buyWeapon(){
    if (currentWeapon < weapons.length - 1) {
        if (gold >= 30) {
          gold -= 30;
          currentWeapon++;
          goldText.innerText = gold;
          let newWeapon = weapons[currentWeapon].name;
          text.innerText = "You now have a " + newWeapon + ".";
          inventory.push(newWeapon);
          text.innerText += " In your inventory you have: " + inventory;
        } else {
          text.innerText = "You do not have enough gold to buy a weapon.";
        }
      } else {
        text.innerText = "You already have the most powerful weapon!";
        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon;
    }
}
const sellWeapon = () => {
    if (inventory.length > 1) {
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon = inventory.shift();
        text.innerText = "You sold a " + currentWeapon + ".";
        text.innerText += " In your inventory you have: " + inventory;
      }else{
        text.innerText = "Don't sell your only weapon!"
      }
}


const fightSlime = () => {
    fighting = 0
    goFight()
}
const fightBeast = () => {
    fighting = 1
    goFight()
}
function fightDragon (){
    fighting = 2
    goFight(2)
}

function goFight(n) {
    update(locations[3]);
    monsterHealth = monsters[n].health;
    monsterStats.style.display = "block";
    monsterName.innerText = monsters[n].name;
    monsterHealthText.innerText = monsterHealth;
}
function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
    
    health -= getMonsterAttackValue(monsters[fighting].level);
    if(isMonsterHit()){
        monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
    }else{
        text.innerText = " You miss."
    }
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    if (health <= 0) {
      lose();
    } else if (monsterHealth <= 0) {
      fighting === 2 ? winGame() : defeatMonster();
    }
    if(Math.random() <= .1 && inventory.length !== 1){
        text.innerText += " Your "+ inventory.pop() + " breaks."
        currentWeapon--
    }
}
function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7);
    xp += monsters[fighting].level;
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[4])
}
function isMonsterHit() {
    return Math.random() > .2 || health < 20;
}
function easterEgg(){
    update(locations[7])
}
function lose() {
    update(locations[5])
}
const dodge = () => {
    text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}
const goHome= () => {
    update(locations[0])
}
function pick(guess){

}
function pickTwo(){
    pick(2)
}
function pickEight(){
    pick(8)
}
const update = (location) => {
    //destructuring objects
    const {name, buttonText, buttonFunction, text: finalText} = location;
    monsterStats.style.display = "none"
    button1.innerText = buttonText[0]
    button2.innerText = buttonText[1]
    button3.innerText = buttonText[2]
    button1.onclick = buttonFunction[0]
    button2.onclick = buttonFunction[1]
    button3.onclick = buttonFunction[2]
    text.innerText = finalText
}

const weapons = [
    { name: 'stick', power: 5 },
    { name: 'dagger', power: 30 },
    { name: 'claw hammer', power: 50 },
    { name: 'sword', power: 100 }
];

const locations = [
    {
        name: "town square",
        buttonText : ["Go to store", "Go to cave", "Fight dragon"],
        buttonFunction: [goToStore, goToCave, fightDragon],
        text: "You enter the store."
    },
    {
        name: "store",
        buttonText : ["buy health (10 gold)", "buy Weapon (30 gold)", "go back home"],
        buttonFunction: [buyHealth, buyWeapon, goHome],
        text: "buy all you want"
    },
    {
        name: "cave",
        buttonText : ["fight slime", "fight beast", "go back home"],
        buttonFunction: [fightSlime, fightBeast, goHome],
        text: "The cave is dangerous"
    },
    {
        name: "fight",
        buttonText: ["Attack", "Dodge", "Run"],
        buttonFunction: [attack, dodge, goHome],
        text: "You are fighting a monster."
    },
    {
        name: "kill monster",
        buttonText: ["Go to town square", "Go to town square", "Go to town square"],
        buttonFunction: [goHome, goHome, goHome],
        text: "The monster screams Arg! as it dies. You gain experience points and find gold."
    },
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You die. ☠️"
    },
    { 
        name: "win", 
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
        "button functions": [restart, restart, restart], 
        text: "You defeat the dragon! YOU WIN THE GAME! 🎉" 
    },
    { 
        name: "easter egg", 
        "button text": ["2", "8", "Go to town square?"], 
        "button functions": [pickTwo, pickEight, goTown], 
        text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!" 
    }
]
//console.log(goFight(0));
button1.onclick = goToStore
button2.onclick = goToCave
button3.onclick = goFight



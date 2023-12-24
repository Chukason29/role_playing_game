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
const goFight = () => {
    console.log("go to fight");
}
const fightSlime = () => {
    fighting = 0
    goFight()
}
const fightBeast = () => {
    fighting = 1
    goFight()
}
const fightDragon = () => {
    fighting = 2
    goFight()
}
const attack = () => {

}
const dodge = () => {
    
}
const goHome= () => {
    update(locations[0])
}
const update = (location) => {
    //destructuring objects
    const {name, buttonText, buttonFunction, text: finalText} = location;

    button1.innerText = buttonText[0]
    button2.innerText = buttonText[1]
    button3.innerText = buttonText[2]
    button1.onclick = buttonFunction[0]
    button2.onclick = buttonFunction[1]
    button3.onclick = buttonFunction[2]
    text.innerText = finalText
}
const locations = [
    {
        name: "town square",
        buttonText : ["Go to store", "Go to cave", "Fight dragon"],
        buttonFunction: [goToStore, goToCave, goFight],
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
    }
]
const weapons = [
    { name: 'stick', power: 5 },
    { name: 'dagger', power: 30 },
    { name: 'claw hammer', power: 50 },
    { name: 'sword', power: 100 }
];

button1.onclick = goToStore
button2.onclick = goToCave
button3.onclick = goFight



"use strict";
let xp = 0
let health = 100
let gold = 50
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
const goFight = () => {
    console.log("go to fight");
}
const buyGold = () => {
    console.log("buyGold");
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

const fightSlime = () => {
    console.log("fight Slime");
}
const fightBeast = () => {
    console.log("fight Beast");
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
        buttonText : ["buy 10 gold", "buy 5 Weapon", "go back home"],
        buttonFunction: [buyGold, buyHealth, goHome],
        text: "buy all you want"
    },
    {
        name: "cave",
        buttonText : ["fight slime", "fight beast", "go back home"],
        buttonFunction: [fightSlime, fightBeast, goHome],
        text: "The cave is dangerous"
    }
]

button1.onclick = goToStore
button2.onclick = goToCave
button3.onclick = goFight



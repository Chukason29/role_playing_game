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
    console.log("go to cave");
}
const goFight = () => {
    console.log("go to fight");
}
const buyGold = () => {
    console.log("buyGold");
}
const buyHealth = () => {
    console.log("buyHealth");
}
const goHome= () => {
    update(locations[0])
}
const update = (location) => {
    //destructuring objects
    const {name, buttonText, buttonFunction, text} = location;

    button1.innerText = buttonText[0]
    button2.innerText = buttonText[1]
    button3.innerText = buttonText[2]
    button1.onclick = buttonFunction[0]
    button2.onclick = buttonFunction[1]
    button3.onclick = buttonFunction[2]
    text.innerText = text
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
    }
]

button1.onclick = goToStore
button2.onclick = goToCave
button3.onclick = goFight



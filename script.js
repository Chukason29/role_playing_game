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
    button1.innerText = "Go to store"
    button2.innerText = "Go to cave"
    button3.innerText = "Fight dragon"
    button1.onclick = goToStore
    button2.onclick = goToCave
    button3.onclick = goFight
    text.innerText = "You enter the store.";
}
const update = (location) => {

}
const locations = [
    {
        name: "town square",
        buttonText : ["Go to store", "Go to cave", "Fight dragon"],
        buttonFunctions: [goToStore, goToCave, goFight],
        text: "You enter the store."
    },
    {
        name: "store",
        buttonText : ["buy 10 gold", "buy 5 Weapon", "go back home"],
        buttonFunctions: [buyGold, buyHealth, goHome],
        text: "buy all you want"
    }
]
button1.onclick = goToStore
button2.onclick = goToCave
button3.onclick = goFight



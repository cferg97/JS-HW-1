let pastaStart = 400
let guancialeStart = 250
let eggStart = 6 * 18
let cheeseStart = 50
let pepperStart = 4
let smallPepper = 1
let spoonWater = 50
let grams = "g"

console.log(
    "Ingredients: ",
    "\n",
    "Spaghetti: " +pastaStart + grams,
    "\n",
    "Guanciale: " +guancialeStart + grams,
    "\n",
    "6 Egg Yolks: " +eggStart + grams,
    "\n",
    "Pecorino Romano Cheese: " +cheeseStart + grams,
    "\n",
    "Raw black pepper: " +pepperStart + grams,
    "\n"
    )



let sauceStart = eggStart + cheeseStart
console.log("First we combine the cheese and the egg together leaving us with: " + sauceStart + grams)
console.log("Next we take a small amount of the roasted black pepper and add this in")
let sauce1 = sauceStart + smallPepper
console.log("Now we are left with: " + sauce1 + grams)

let cookedGuanciale = (guancialeStart/2)
let grease = cookedGuanciale
let carbonara1 = grease + spoonWater
let carbonara = pastaStart + carbonara1
console.log("Next we add two spoons of cooking water to the leftover grease, leaving us with: " + carbonara1 + grams)
console.log("Then we add the pasta to the same pan, leaving us with: " + carbonara + grams)

let carbonara2 = carbonara + sauce1
console.log("Then we add the yolk and cheese mixture, leaving us with: " + carbonara2 + grams)

let pepperFinal = pepperStart - smallPepper
let carbonaraFinal = carbonara2 + pepperFinal
console.log("Finally we are finished, just plate up and add remaining pepper to top, leaving us in total with: " + carbonaraFinal + grams)

let servingSize = (carbonaraFinal/4)
console.log("This recipe serves four people, each serving is: " + servingSize + grams)
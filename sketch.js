let names = ["Peter", "Meg", "Lois"]; // Array of names
console.log(names); //calling the names
console.log(names.length); //checking the length of the array

names[1]="Brian"; //changing the second name (Meg) to (Brian)
names.push("Stewie"); //adding a new name (Stewie) to the array
names.push("Chris");
console.log(names);
console.log(names.length); //checking the length of the array

names.pop(); //removing the last name (Chris) from the array
console.log(names);

names.unshift("Cleveland"); //adding a new name (Cleveland) to the beginning of the array
console.log(names);

names.shift(); //removing the first name (Cleveland) from the array
console.log(names);

for(let i = 0; i < names.length; i++) { //looping through the array to print each name
	console.log(names[i]);
}

console.log(names.indexOf("Brian")); //finding the index of (Brian)
console.log(names.indexOf("Meg")); //finding the index of (Meg) which is no longer in the array

let lads = names.slice(0,2);
console.log(lads); //creating a new array with the first two names in the original array

names.splice(1,1); //removing the second name (Brian) from the original array
console.log(names);

names.splice(1,1,"Quagmire"); //replacing (Brian) with (Quagmire)
console.log(names);


let basket = ["apple", "banana", "orange", "pear"];
console.log("Fruit " + (basket.indexOf(basket[0]) +1) + ": " + basket[0]); //log the 1st fruit

console.log(basket.length -1) //logs the last fruit, -1 is neccesary bc arrays start at 0
console.log("Last fruit: " + basket[3]); //prints last fruit

console.log(basket.indexOf("banana")); //finds the index of "banana"
basket[1] = "kiwi"
console.log(basket)

basket.pop();
console.log(basket)
basket.unshift("mango")
for(let i = 0; i < basket.length; i++) { //looping through the array to print each name
	console.log("Fruit " + (basket.indexOf(basket[i]) +1) + ": " + basket[i]);
}
if (basket.indexOf("orange") !== -1) { //finds the index of "orange"
	console.log("orange found at index " + basket.indexOf("orange"));
}
if (basket.indexOf("orange") == -1) { //finds the index of "orange"
	console.log("orange not found");
}


let citrus = basket.slice(0 +1,-1);
console.log(citrus); //creates a new array with the middle two fruits
function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}


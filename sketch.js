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

function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}

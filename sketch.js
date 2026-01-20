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

function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}

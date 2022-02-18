//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user
//circumference = 2pi * radius
//area = pi * r^2

//the fucntion will take in one parameter, radius
//prompt to ask the user for a number
// save the answer into variable radius

//Variables:
	//circumfrence
	//area
	//radius

	var radius = prompt("What is the radius of the circle")

	function circleCalculation (radius) {
		let circumference = (2 * Math.PI) * radius;
		let area = Math.PI * radius^2
		console.log(area)
		console.log(circumference)
    console.log("The area of the circle is " + (Math.round(area)) + " and the perimeter of the circle is " + (Math.round(circumference)) + ".")
	}
	
	circleCalculation(radius);


//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer)

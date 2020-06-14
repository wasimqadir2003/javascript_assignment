/*-----------------------------------------------------------Chapter-1 Started Here---------------------------------------------------------------------------*/

/*Task 1*/

alert("Welcome to Our Site");

/* Task-2 */

alert(' Error! Please enter a valid password ');

var button = document.createElement("button");
button.innerHTML = "OK";

/* Task-3 */

alert(' Welcome to JS Land... \n Happy Coding ');

var button = document.createElement("button");
button.innerHTML = "OK";

/* Task-4 */

alert(' Welcome to JS Land');

var button = document.createElement("button");
button.innerHTML = "OK";

alert(' Happy Coding!' + y);

var button = document.createElement("button");
button.innerHTML = "OK";


/*Task-5*/

console.log("Hello... I can run JS through my web browser's console");

/*---------------------------------------------------Chapter-1 Ends Here------------------------------------------------------------------------------------*/


/*---------------------------------------------------Chapter-2 Starts Here---------------------------------------------------------------------------------*/


/* Task-1 */ 

var username;

/* Task-2 */

var myName = "Wasim  Qadir";

/* Task-3 */

var message ;

message = "Hello World!"; 

alert(message);

 /* Task-4 */

 var name = "Jhone Doe";
 var age = "15 years old";
 var education = "Certified Mobile Application Development";

 alert (name);
 alert (age);
 alert (education);

 /* Task-5 */

 var str = 'PIZZA';

 alert(str);
 
str = str.slice(0, str.length -1);
alert(str);

str = str.slice(0, str.length - 1);
alert(str);

str = str.slice(0, str.length - 1);
alert(str);

str = str.slice(0, str.length - 1);
alert(str);


/* Task-6 */

var email = " example@example.com";

alert("My email address is" + email);

/* Task-7 */

var book = "A smarter way to learn JavaScript"; 

alert("I am trying to learn from the book" + book);

/* Task-8 */

document.write("<p> Yeh! I can write HTML content through JavaScript</p>");

/* Task-9 */

var symbol = " ▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬ ";

document.write( symbol);

alert(symbol);

/*------------------------------------------------------------------Chapter-2 Ends Here -----------------------------------------------------------------------*/


/*-------------------------------------------------------------------Chapter- 3 Started here -------------------------------------------------------------------*/

/* Chapter- 3 Task-1 */

var age = "I am 15 Years Old";

alert(age);

/* Chapter- 3 Task-2 */

var visitor = "You have visited this site N times";

alert(visitor);


/* Chapter- 3 Task-3 */

var birthYear = "My birth year is 1990 <br> Data type of my ddeclared variable is number <br>";

document.write(birthYear);


/* Chapter- 3 Task-4 */

var visitorName = " John Doe";
var title = " T-shirt(s)";
var quantity = " 5";

document.write(visitorName + " order" + quantity + title +" on XYZ Clothing store");

/*-------------------------------------------------------------------Chapter- 3 Completed here -------------------------------------------------------------------*/

/*-------------------------------------------------------------------Chapter- 4 Started here ---------------------------------------------------------------------*/


/* Task-1 */

var username, age, cost;

/* Task-2 */

/* Leagal Variables */

var name, _price, last_year_student, user1, $ali;

/* Non-Leagal Variables */

var name, last year, user, ali, ali khan;


/* Task-3 */

document.write("<h1>Rules for naming JS variables </h1>"); 

document.write("<p>Variable names can only contain letters, numbers, dollar sign and underscores. For example : $my_1stVariable</p>"); 

document.write("<p>Variables must begin with a letters, dollar signs or underscores. For example $name, _name or name.</p>"); 

document.write("<p> Variable names are case sensitive. </p>");

document.write("<p> Variable names should not be JS keywords. </p>");

/*-------------------------------------------------------------------Chapter- 4 Completed here ---------------------------------------------------------------------*/


/*-------------------------------------------------------------------Chapter- 5 Started here ----------------------------------------------------------------------*/

/* Task-1 */

var price = 5;

var profit = 3;

var sum = price + profit;

alert(sum);

document.write("Sum of 3 and 5 is 8 <br>");

/* Task-2 */

/* Subtraction */

var price = 5;

var profit = 3;

var sub = price - profit;

alert(sub);

document.write("Subtraction of 5 and 3 is 2 <br>");

/* Multiplication */

var price = 5;

var profit = 3;

var multiplication = price * profit;

alert(multiplication);

document.write("multiplication of 3 and 5 is 15 <br>");

/* Division */

var price = 15;

var profit = 3;

var division = price / profit;

alert(division);

document.write("division of 15 and 3 is 5 <br>");

/* Modulus */

var price = 5;

var profit = 3;

var multiplication = price % profit;

alert(multiplication);

document.write("multiplication of 5 and 3 is 2 <br>");

/* Task-3 */

var a;

document.write("Value after variable declaration is: undefine (??) <br>");

a= 5;

document.write("Initial Value : 5 <br> ");

a++;

document.write("Valueafter increment is: " + a + "<br>");

a = a + 7;

document.write("Value after addition is: " + a + "<br>");

a--;

document.write("Value after decrement is: " + a + "<br>");

a = a % 3;

document.write("The remainder is : " + a + "<br>");

/* Task-4 */

var ticket_cost = 600;

var no_of_tickets = 5;

var total_cost = ticket_cost * no_of_tickets;

document.write("Total cost to buy 5 tickets to a movie is " + total_cost + "PKR" + "<br>");

/* Task-5 */

var a = 4;

var b; 

for (var i=1; i<=10; i++) {
	b = a * i;

	document.write(" " + a + " * " + i + " = ", + b + "<br>" );
}

/* Task-6 */

/* Celsius temperature */

var temperature, c;

temperature =  77;

c = (temperature - 32) * 5 / 9;

document.write(c+"C " + "is " + temperature+"F" + "<br>");

/* Fahrenheit temperature */


var temperature, c;

temperature =  21.11;

c = (temperature * 9/5) + 32;

document.write(c+"F " + "is " + temperature+"c" + "<br>");

/* Task-7 */

var item_1 = "Price of item 1";
var item1_price = 650;
var item_2 = "Price of item 2";
var item2_price = 100;
var order_1 = "Quantity of item 1";
var quantity1 = 3;
var order_2 = "Quantity of item 2";
var quantity2 = 7
var charges = "Shipping charges";
var charges1 = 100;

var total_cost = (item1_price * quantity1) + (item2_price * quantity2) + charges1;
 
document.write(item_1 + " is " + item1_price + "<br>");

document.write(order_1 + " is " + quantity1 + "<br>");

document.write(item_2 + " is " + item2_price + "<br>");

document.write(order_2 + " is " + quantity2 + "<br>");

document.write(charges + "  " + charges1 + "<br><br>");

document.write("Total cost of your order is " + total_cost + "<br><br>");

/* Task-8 */

var x = 980;
var y = 804;

var z = (y / x) * 100;

document.write("Total marks: " + x + "<br>");
document.write("Marks obtained: " + y + "<br>");
document.write("Percentage: " + z + "%" + "<br><br>");

/*  Task-9  */

var dollars = 10;
var riyals = 25;

var rup1 = 10 * 104.80;
var rup2 = 25 * 28;

var total = rup1 + rup2;

document.write("Total Currency in PKR: " + total + "<br><br>");

/*  Task-10  */

var a = 20;

var b = ((a + 5) * 10) / 2;

document.write(b + "<br><br>");

/*  Task-11  */

var c_year = 2020;
var b_year = 1990;

var age = c_year - b_year;

document.write("Current Year: " + c_year + "<br>");
document.write("Birth Year: " + b_year + "<br>");
document.write("Your age is: " + age + "<br><br>");

/*  Task-12  */

var r = 20;

var pi = 3.14;

var C = 2 * pi * r;

var A = pi * r * r;

document.write("Radius of a circle: " + r + "<br>");
document.write("The Circumference is: " + C + "<br>");
document.write("The Area is: " + A + "<br>");


/* Task-13 */

document.write("<h1> The Lifetime Supply Calculator </h1> <br>")

var favt_snack = "chocolate chip";
document.write("Favourite Snack: " + favt_snack + "<br>");
var c_age = 15;
document.write("Current age: " + c_age+ "<br>")
var m_age = 65;
document.write("Estimated Maximum Age: " + m_age + "<br>")
var amount_per_day = 3;
document.write("Amount of snack per day: " + amount_per_day + "<br>")
var r_age = m_age - c_age;

var r_per_day = r_age * amount_per_day;

document.write("You will need " + r_per_day +" "+ favt_snack + " to last you until the ripe old age of " + m_age + "." + "<br>")

/*---------------------------------------------------Chapter-5 Completed Here--------------------------------------------------------------------------------------*/


/*---------------------------------------------------chapter-6-9 Started Here--------------------------------------------------------------------------------------*/


/*  Task-1  */
var a = 10;

document.write("The value of a is: " + a + "<br><br>");

document.write("----------------------------" + "<br><br>");

++a;

document.write("The value of ++a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");



document.write("The value of a++ is: " + a + "<br>");
a++;
document.write("Now the value of a is: " + a + "<br><br>");

--a;

document.write("The value of --a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");



document.write("The value of a-- is: " + a + "<br>");
a--;
document.write("Now the value of a is: " + a + "<br><br>");

/*  Task-2  */

var a = 2;

var b = 1;

var result = --a - --b + ++b + b--;

document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");

document.write("result is " + result + "<br><br>");

/*  Task-3  */

var name = window.prompt("Enter your name");
alert("Your name is " + name);

/* Task-5 */

var a = window.prompt("Enter the number")

var b = 5;

var c, d;

for (var i=1; i<= 16; i++) {

	if (a === "integer number") 

	{

	 	c = a * i;

	document.write(" " + a + " * " + i + " = ", + c + "<br>" );
	 }

	else {
		d = b * i;

	document.write(" " + b + " * " + i + " = ", + d + "<br>" );
	}
}


/*  Task-6  */

var subject1 = prompt("Enter you Subject");
var subject2 = prompt("Enter you Subject");
var subject3 = prompt("Enter you Subject");

var total = 100;

var subject1ob = prompt("Enter " + subject1 + " Marks");
var subject2ob = prompt("Enter " + subject2 + " Marks");
var subject3ob = prompt("Enter " + subject3 + " Marks");

var sub1per = (subject1ob/total) * 100;
var sub2per = (subject2ob/total) * 100;
var sub3per = (subject3ob/total) * 100;

document.write("subject " + "Total Marks " + "Obtained Marks " + "Percentage" + "<br>")
document.write( subject1 + " 	    " + total + "  	    " + subject1ob + "      " + sub1per + "%" + "<br>");
document.write( subject2 + "  	    " + total + "  	    " + subject2ob + "      " + sub2per + "%" + "<br>");
document.write( subject3 + "   		" + total + "  	    " + subject3ob + "      " + sub3per + "%" + "<br>");




/*------------------------------------------------------Chapter-6-9 Completed Here----------------------------------------------------------------------------*/



/*------------------------------------------------------Chapter-9-11 Completed Here----------------------------------------------------------------------------*/



/* Task-1 */

var city = prompt("Enter Your city");

if (city === "Karachi") {
	alert("Welcome to city of lights");
}

/* Task-2 */

var gender = prompt("Enter Your Gender");

if (gender === "male") {

	alert("Good Morning Sir");
}

else {
	alert("Good Morning Ma'am");
}

/* Task-3 */

var color = prompt("Please Enter Your Color");

if (color === "Red") {
	alert("Must Stop");
}

else if (color === "Yellow") {

	alert("Ready to Move");

}

else if (color === "Green") {

	alert("Move now");

}

else {

	alert("You have enter wrong color");
}

/*  Task-4 */

var fuel = prompt("Enter  the fuel level");

if (fuel < "0.25 liters") {
	alert("Please refill the fuel in your car.")
}
else {
	alert("No Need to refill");
}

/* Task-5 (a) */

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");

}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");

}


 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}


if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}


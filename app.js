//simple functions
//functions does not work unless it is called
function myfunc(){
console.log("hello world")
 }

myfunc()

// //using document
 function myfunction(str){
     document.getElementById("demo").innerHTML=str;
 }

 myfunction("Welcome to bizmarrow")

// //function with multiple arguements
 function MATH(x, y){
     var product = x * y
    document.getElementById("demo1").innerHTML = product;

 }

 MATH(20,20)

//Functions with event
function multiplyNumbers(num1, num2){
    var product = num1 * num2;
    document.getElementById("demo2").innerHTML=product;

}
//function using notifications
function showDialog(){
    alert("Registration Successful")
}
showDialog()

//function with return statement
function addNumbers(num1, num2){
    var sum = num1 + num2
    return sum;
}
document.getElementById("demo3").innerHTML=
addNumbers(100,100);

//using return statement to concatenate
function getNames(firstName, lastName){
    return firstName + " " + lastName
}

var fullName = getNames("john", "doe")
document.getElementById("demo4").innerHTML=fullName;

//function scope
function getAge(age){
    var fullName = "John Doe";

    document.getElementById("demo5").innerHTML=
    fullName + " is " + age + "years old."
}

document.getElementById("demo6").innerHTML= fullName;

global Variable
we define it outside   our function

var fruits = "Apple";

function myFunc(){
    document.getElementById("demo7").innerHTML = 
    "My favorite fruit is "  + fruits;
}

//how to convert kilometer to miles
function tomiles(kilometer){
    var miles = kilometer * 0.6789
    return kilometer + "kilometers" + " is equal to " + miles + "mile's"
}
alert(tomiles(10))
document.getElementById("demo8").innerHTML = tomiles(20);

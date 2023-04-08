// // Ans1)


let num1=prompt("Enter first number")
let num2=prompt("Enter second number")
if(num1>num2){
    console.log( num1 +" is greater than " + num2)

}
else{
    console.log(num2 + "is greater than " + num1)
}


// // Ans2)

let number = parseInt(prompt("Enter a number: "));

if (number > 0) {
    console.log("The number is "+number +"and sign is +");
}


else if (number == 0) {
  console.log("The number is zero");
}


else {
     console.log("The number is "+number +"and sign is +");
}

// // Ans3)
// // program to find the largest among three numbers

// // take input from the user
let numb1 = parseFloat(prompt("Enter first number: "));
let numb2 = parseFloat(prompt("Enter second number: "));
let numb3 = parseFloat(prompt("Enter third number: "));
let largest;

// check the condition
if(numb1 >= num2 && num1 >= numb3) {
    largest = num1;
}
else if (numb2 >= num1 && num2 >= numb3) {
    largest = numb2;
}
else {
    largest = numb3;
}


console.log("The largest number is " + largest);



// Ans4)

for (let i=0; i<=15; i++) {
  if (i === 0) {
          console.log(i +  " is even");
  }
  else if (i % 2 === 0) {
          console.log(i + " is even");   
  }
  else {
          console.log(i + " is odd");
  }
}


// Ans5)

let percentage=prompt("Enter your percentage")
if(percentage>=100){
  console.log("A grade")

}
else if(percentage>=90){
  console.log("B grade")

}
else if(percentage>=80){
  console.log("C grade")

}
else if(percentage>=70){
  console.log("D grade")

}
else if(percentage>=60){
  console.log("F grade")

}
else{
  console.log("Fail")
}



// Ans6)

for (var i=1; i <= 100; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}

// Ans7)


let x,y,star;
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
    star=star+("*");        
      }
 console.log(star);
 star='';    
}



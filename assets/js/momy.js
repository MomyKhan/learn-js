var m;
m = 20;
m = m+8;
document.write (m);

//prompt method:

var a
a = prompt("enter your name: ", "NAME");
document.write(a);

//if statement

var a = 10;
if ((a == 10))
document.write("you entered: " +a);

//Logical operator:

var a = 10;
var b = 20;
if((a==10) && (b==20))
document.write("Momy khan");


var a = prompt("Enter your roll: ");
if((a==10))
document.write("Name:Rahul");

//if else stament:

var a = 20;
if ((a == 10))
document.write("Rahul");
else
document.write("Wrong value");



var a = prompt("Enter your roll: ");
if ((a == 10))
document.write("Rahul");
else
document.write("Wrong value");

//Else if statement:

var result = 50;
if (result<=30)
document.write("Fail");
else if(result<=40)
document.write("pass");
else if(result<=60)
document.write("good");
else
document.write("very good");

//switch statement:

var day =7;
switch(day){
    case 1:
    document.write("sat"); 
    break; 
    case 2:
    document.write("sun"); 
    break; 
    case 3:
    document.write("mon"); 
    break; 
    case 4:
    document.write("tues"); 
    break; 
    default:
    document.write("wrong");   

}

var day = "mon";
switch(day){
    case "sat":
    document.write("working day"); 
    break; 
    case "sun": 
    case "mon":
    document.write("Holy day"); 
    break; 
    default:
    document.write("wrong");   
}

//For loop:

for(i= 0;  i<5;  i++)
{
    document.write(i+"<br>");

}


for(i= 0;  i<5;  i++)
{
    document.write(i+"<br>");

}
document.write("<br>" + "rest of the code");

var i= 0;
for( ;  i<5;  i++)
{
    document.write(i+"<br>");

}
document.write("<br>" + "rest of the code");


var i= 0;
for( ;  i<5; )
{
    i++;
    document.write(i+"<br>");

}
document.write("<br>" + "rest of the code");


var i= 0;
for( ;  i<5; )
{
   
    document.write(i+"<br>");
    i++;
}
document.write("<br>" + "rest of the code");


var i= 0;
for( ;  ; i++)
{
   if(i==3)
   {
       break;
   }
   
    document.write(i+"<br>");
  
}
document.write("<br>" + "rest of the code");

//Nested for loop:

for(i=0; i<3; i++) {
    document.write("<strong>outer loop</strong>");
    document.write(i);
    document.write("<br>");
    for(j=0;  j<5; j++) {
        document.write("inner loop");
        document.write(j);
        document.write("<br>");
    }

}

for(i=0; i<3; i++)
{
    document.write("<strong>outer loop</strong>" +i  +"<br>");
   
    for(j=0;  j<5; j++) {
        document.write("inner loop" +j +"<br>");
    }

}

//while loop:
var i= 0;
while(i<5)
{
    document.write(i + "<br>");
    i++;
}
document.write("rest of the code");


var i= 0;
while(true)
{
    if(i==3)
    {
      break;  
    }
    document.write(i + "<br>");
    i++;
}
document.write("rest of the code");
document.write("<br>");

//Nested while loop:
var i= 0;
while(i<3)
{
    document.write("<strong>outer loop</strong>"+ i+"<br>");
    i++;
    var j=0;
    while(j<5)
    {
        document.write("inner loop"+j+"<br>");
        j++;
    }
}
document.write("rest of the code");
document.write("<br>")


//Do while loop:
var i= 0;
do
{
    document.write(i+"<br>");
    i++;
}while(i<3);


var i= 0;
do
{
    if(i==3)
    {
        break;
    }
    document.write(i+"<br>");
    i++;
}while(true);


//Nested do while loop:
var i= 0;
do
{
    document.write("<strong>outer loop</strong>"+ i +"<br>");
    i++;
    var j= 0;
    do
    {
        document.write("inner loop" + j +"<br>");
        j++;
    }while(j<5);
}while(i<3);

//break and continue:
for(i=1; i<=5; i++)
{
    if(i==3)
    {
        break;   //stop loop
    }
    document.write(i+"<br>");
}

for(i=1; i<=5; i++)
{
    if(i==3)
    {
        continue;   //skip loop
    }
    document.write(i+"<br>");
}

//Function
//Creating Function: 
function display()
{
    document.write("Shapla kinder garden"+"<br>");
}
//Calling Function:
display();
display();
display();
display();
display();
document.write("<br>")

//Function with parameter:

function Display(name1, name2)
{
    document.write(name1 + name2);
}
Display(" Momy ", " Monika ");

//Function with arguments object:

function disp (name)
{
    document.write(name);
}
disp("GeekyShows");



function num (name)
{
    document.write(arguments[0]);
}
num("GeekyShows");



function dis (name1, name2)
{
    document.write(arguments[0] +" ");
    document.write(arguments[1]);
}
dis("GeekyShows", "World");


function geek (name1, name2)
{
    arguments[0]= "Hello";
    document.write(arguments[0] +" ");
    document.write(arguments[1]);
}
geek("GeekyShows", "World");



function gee (name1, name2)
{
    document.write(arguments.length);
}
gee("GeekyShows", "World");


function shows (name1, name2)
{
    var l = arguments.length;
    document.write(l);
}
shows("GeekyShows", "World");



function show ()
{
 for(var i =0; i<arguments.length; i++){
     document.write(arguments[i] + " ")
 }
}
show("GeekyShows", "World", "Hello");

document.write("<br>")


//Default Parameter:
function add(a, b, c=70){
    document.write("A= " +a +"<br>");
    document.write("B= " +b +"<br>");
    document.write("C= " +c +"<br>");
}
add(10,20,);


function addi(a, b, c=70){
    document.write("A= " +a +"<br>");
    document.write("B= " +b +"<br>");
    document.write("C= " +c +"<br>");
}
addi(10,20,30);


//Rest Parameter:
function momy(...args){
    document.write(args);
}
momy(10,20,30,40,50);

document.write("<br>")

function mom(a, ...args){
    document.write(a + "<br>");
    document.write(args);
}
mom(10,20,30,40,50);


function momi(a, ...args){
    document.write(a + "<br>");
    document.write(args[0]);
    document.write(args[1]);
    document.write(args[2]);
    document.write(args[3]);
}
momi(10,20,30,40,50);


//return statement:
function moni(a,b){
    return(a+b);
}
var x = moni(10,20);
document.write(x);





























































































































































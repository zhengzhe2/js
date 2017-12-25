//javaScript 


var x=3;
var y=3;
var z=x+y;
console.log(z);

var pi=3.14;
console.log(pi);
var name="Bill Gates";
console.log(name);
var answer="Yes I am!";
console.log(answer);

var name="Bill Gates", 
age=56, 
job="CEO";

var carname="Volvo";
console.log(carname);
var carname;
console.log(carname);


var x;
var x = 6;
var x = "Bill";

var message="Hello world";
var x=message.length;
console.log(x);

function aaaa()
{
    var x=5;
    return x;
}

var myfunc = aaaa();
console.log(myfunc);
console.log(aaaa());


function myFunction(a, b)
{
    return a*b;
}

console.log(myFunction(4, 5));

function myFunction_1(a, b)
{
    if (a > b) 
    {
        return ;
    }

    return x=a+b;
}

console.log(myFunction_1(4,5));
console.log(myFunction_1(5,4));



var text1="aaaadd";
var text2="dsdsfdsf";
var text3=text1+text2;
console.log(text3); 

x="5"+"5";
console.log(x);
x=5+5
console.log(x);
x=5+"5";
console.log(x);
x="5"+5;
console.log(x);

var time=new Date().getHours();
if (time<20) 
{
    x="Good day";
    console.log(time);
    console.log(x);
}
else {
    x="Bad day"
    console.log(x);
}

var person={fname:"John",lname:"Doe",age:25};
var txt="";
for(x in person)
{
    txt = txt + person[x];
}
console.log(txt);



cars=["BMW", "Volvo", "Saab", "Ford"];
list:
{
    console.log(cars[0]);
    console.log(cars[1]);
    break list;
    console.log(cars[2]);
    console.log(cars[3]);
}

var x = 2;

try {
    if (x == 1) {
        throw "x == 1";
    }
    if (x == 2) {
        throw "x == 2";
    }
}
catch(err) {
    var y="----------------";
    console.log(y);
}


















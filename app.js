
  
// ============****Chapter # 31-34 (Date Methods)****==============

// Question 1

// var x = new Date();
// document.write(x);



// Question 2

// var x = new Date();
// var y = x.getMonth();
// var z = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var d = z[y];
// document.write("<h1>" + "Current month :"+ d + "</h1>");



// Question 3

// var x = new Date();
// var y = x.getDay();
// var z = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]
// alert("Today is "+z[y]);


// Question 4

// var a = new Date();
// var b = a.getDay();

// if (b == 0 || b == 1){
//     alert("IT's Funday");
// }


// Question 5



// var x = new Date();
// var y = x.getDate();
// if( y <= 15){
//     alert("First fifteen days of the month");
// }else{
//     alert("Last days of the month");
// }

// Question 6

// var x = new Date();
// var y = x.getTime();
// var z = y/(1000*60);
// var d = Math.round(z);
// document.write("<h1>" + "Current Date : "+ x +"</h1>");
// document.write("<h1>" + "Elapsed miliseconds since January,1970 : "+ y +"</h1>");
// document.write("<h1>" + "Elapsed minutes since January,1970 : "+ d +"</h1>");


// Question 7

// var x = new Date();
// var y = x.getHours();

// if(y >= 0 && y <= 11){
//     alert("Its AM");
// }else if(y >= 12 && y <= 23){
//     alert("Its PM")
// }

// Question 8

// var x = new Date();
// x.setHours(0)
// x.setMinutes(0);
// x.setSeconds(0);
// x.setFullYear(2021);
// x.setMonth(11);
// x.setDate(31)
// document.write("<h1>" + "Later Date : "+ x +"</h1>");


// Question 9

// var x = new Date();
// var y = new Date("April 25,2020")
// var z = x.getTime();
// var d = y.getTime();
// var e = z-d
// var f = e/(1000*60*60*24);
// alert(Math.round(f) + " Days have passed away since 1st ramadan 2020");

// Question 10


// var x = new Date();
// var y = new Date("January 1,2021");
// var  z  = x.getTime();
// var  a  = y.getTime();
// var b  = (z-a)/1000;
// var c = Math.round(b)
// document.write("<h1>" + "On refrence date " + x + "<br />" + c +" seconds had passed since begining of 2021" + "<h1 />");



// Question 11

// var x = new Date();
// var y = new Date();
// var z = x.getHours();
// y.setHours(z-1);
// document.write("Current Date : "+ x + "<br />");
// document.write("1 hour ago, It was "+ y);



// Question 12

// var x = new Date();
// var y = new Date();
// var z = x.getFullYear();
// y.setFullYear(z-100);
// alert( "100 Years back, It was " + y);

// Question 13

// var x = prompt("Enter your birth date","January 1,2021");
// var y = new Date();
// var z = new Date(x);
// var a = y.getTime()-z.getTime();
// var b = a/(1000*60*60*24*365);
// var c = Math.round(b);
// var d = z.getFullYear();
// document.write("<h1>" + "Your age is : "    + "<h1 />" + c + "<br />");
// document.write("<h1>" + "Your birthyear is : " + "<h1 />" + d);

// Question 14

// var x = new Date();
// var y = x.getMonth();
// var z = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var a = 410;
// var b = 23; 
// var c = a*b;
// var e = 500;
// var d = c + e;
// document.write("<h1> " + "K-Electric Bill" + "</h1>" + "<br />");
// document.write("Company name : XYZ Company" + "<br />");
// document.write("Month : "+ z[y] +"<br />");
// document.write("Number of units: "+ a +"<br />");
// document.write("Charges per units : "+ b +"<br />" + "<br />");
// document.write("Net amount payable (with in due date) : " + c + "<br />");
// document.write("Late Payment surcharge : "+ e +"<br />");
// document.write("Gross amount payable (after due date) : " + d + "<br />");


// ============****Chapter # 35-38 (Functions)****==============

// Question 1

// function currentdate(){
//     var x = new Date();
//     document.write(x)
// }

// currentdate();


// Question 2
 
// function userName(){
//     var firstName = prompt("Enter your First name");
//     var lastName = prompt("Enter your last name");
//     var fullName = firstName + " " + lastName;
//     alert("Assalam o Alaikum " + fullName);
// }

// userName();


// Question 3

// function add(){
//         var firstNum = +prompt("Enter First Number");
//         var lastNum = +prompt("Enter last Number");
//         var total = firstNum + lastNum;
//         return total;
// }

// alert(add());


// Question 4

// function calculation(firstNumber,secondNumber,operation){
//    if(operation === '+'){
//     alert(firstNumber + secondNumber);
// }else if(operation === '-'){
//     alert(firstNumber - secondNumber);
// }else if(operation === '*'){
//     alert(firstNumber * secondNumber);
// }else if(operation === '/'){
//     alert(firstNumber / secondNumber);
// }else if(operation === '%'){
//     alert(firstNumber % secondNumber);
// }
// }

// calculation(+prompt("Enter the First Number"),+prompt("Enter the Second Number"),prompt("What you want"))


// Question 5

// function  square(x){
//     alert(x*x);
// }

// square(prompt("Enter the number"));


// Question 6

// var a = 10;             
// var b = a.length;
//     for (var i = 1; i <  a.length; i++){
//         document.write(b)
//     }



// Question 7
 
// function counting(){
//     var x = +prompt("Enter the First Number")
//     var y = +prompt("Enter the Last Number")
//     for(var i = x; i<=y; i++ ){
//     document.write("<i>" + i + "<i/>" + "<br />")
// }
// }
// counting();


// Question 8

// var base = +prompt("Enter the base");
// var perpendicular = +prompt("Enter the perpendicular");
// var hypotenuse = (base*base) + (perpendicular*perpendicular);
// function hypo(){
// var x = hypotenuse;
// var y = Math.sqrt(x);
// alert(y);
// }

// hypo();


// Question 9

// var a = +prompt("Enter the  width");
// function area(width,height){
// document.write("Area of  the rectangle is "+width*height);
// }

// area(a,+prompt("Enter the height"));


// Question 9

// var a = prompt("Enter word");
// var b = 


// Question 11

//     function uppercase(x){
//   var a = x.split(' ');
//   var b = [];
    
//   for(var i = 0; i < a.length; i++){
//       b.push(a[i].charAt(0).toUpperCase()+a[i].slice(1));
//   }
//   return b.join(' ');
// }
// document.write("Example String : "+"the quick brown fox" + " <br />");
// document.write("Example Output : "+uppercase("the quick brown fox"));


// Question 12

// function longestWord(x){
//   var y = x.match(/\w[a-z]{0,}/gi);
//   var z = y[0];

//   for(var i = 1 ; i < y.length ; i++)
//   {
//     if(z.length < y[i].length)
//     {
//     z = y[i];
//     } 
//   }
//   return z;
// }
// alert(longestWord(prompt("Enter the paragraph o find the longest word")));


// Question 13

// function count(para, letter){

//  for (var i = 0; i <= para.length; i++){
//     if (para.charAt(i) == letter) {
//       a +  1;
//       }
//   }
//   return a;
// }


// count(prompt("Enter first"),prompt("Enter second"));
// var a = count();
// alert(a);



// Question 14

// var radius = prompt("Enter the Radius")
// function calcCircumference(){
//     var circumfernce = 2*3.142*radius;
//     document.write("THe Circumferece of a Circle is " + circumfernce);
// }
// calcCircumference();

// function area(){
//     var area =  3.142 *(radius*radius);
//     document.write("THe Area of a Circle is " + area);
// }

// area();



// ============****Chapter # 38-42 (Functions {Switch,Do and While} )****==============


// Question 1

// function power(){
//     var a = +prompt("Enter the number");
// var b = +prompt("Enter the power");
// var x =  Math.pow(a,b);
// document.write(x);
// }

// power();


// Question 2

// function leapYear(){
// var a = prompt("Enter the year" , "2012");
// if(((a % 4 == 0) && (a % 100 != 0))||(a % 400 == 0)){
// alert("Leap year")
// }else{
// alert("Not  the leap year") 
// }
// }

// leapYear();


// Question 3

// var a = +prompt("Enter the length of First side");
// var b = +prompt("Enter the length of Second side");
// var c = +prompt("Enter the length of Third side");
// function sides(){
//     var s = (a+b+c)/2;
//     return s;
// }

// var x = sides();
// function area(){
//     var y = (x)*(x-a)*(x-b)*(x-c);
//     alert(y)
// }

// area();


// Question 4

// var x = +prompt("Enter the marks of first subject");
// var y = +prompt("Enter the marks of second subject");
// var z = +prompt("Enter the marks of third subject");
// function average(){
//     var a = (x+y+z)/3;
//     return a;
// }

// var b = average();

// function percent(){
//     var c = ((x+y+z)/300)*100;
//     return c;
// }

// var d = percent();

// function result(){

//     document.write("Marks of the first subject is : " + x );
//     document.write("Marks of the second subject is : " + y );
//     document.write("Marks of the third subject is : " + z );
//     document.write("<h1>" + "Average marks is : " + "<h1/>"+ b );
//     document.write("<h1>" + "Percentage is : " + "<h1/>"+  d + "%");
// }

// result();


// Question 5


// var a = "My name is bilal";
// function indexOn(x){
// for(var i = 0 ; i <= a.length ; i++){
//     if(a[i] === x){
//         return i;
//     }
// }
// }
// var d = indexOn("n");
// console.log(d)


// Question 6

// var a = prompt("Enter the Paragraph");
// var b = a.replace(/a/g,"").replace(/e/g,"").replace(/i/g,"").replace(/o/g,"").replace(/u/g,"");

// document.write(b);


// Question 7

// var x = "Pleases read this application and give me gratuity";
// function vowels(){
// for(i = 0 ; i <=x.length ; i++){
//     if(x.charAt(i) === "a" || x.charAt(i) === "e" || x.charAt(i) === "i" || x.charAt(i) === "o" || x.charAt(i) === "u" ){
//         if(x.charAt(i+1) === "a" || x.charAt(i+1) === "e" || x.charAt(i+1) === "i" || x.charAt(i+1) === "o" || x.charAt(i+1) === "u" ){
//             document.write(x.charAt(i)+x.charAt(i+1)+",")
//         }

//     }
// }
// }

// document.write(x + "<br />"+"Occurences are : ");
// vowels();


/// Question 8

// var km = +prompt("Enter distance in kilometre", "2");

// function metre(){
//     var m = km*1000;
//     return m;
// }
// var x = metre();

// function centimetre(){
//     var cm = x*100;
//     return cm;
// }
// var y = centimetre();

// function feet(){
//     var f = y*30.48;
//     return f;
// }
// var z = feet();

// function inch(){
//     var i = z*12;
//     return i;
// }

// var a = inch();

// function main(){
//     document.write("Metres : "+ x + "<br />")
//     document.write("Centimetres : "+ y + "<br />")
//     document.write("Feets : "+ z + "<br />")
//     document.write("Inches : "+ a + "<br />")
// }
// main();


// Question 9

// var x = +prompt("Enter the working hours");
// if(x > 40){
//     var y = x - 40;
//     var z = y*12;
//     document.write("The working hours is : " + x  + "<br />");
//     document.write("The payment of overtime is : " + z);
// }else{
//     document.write("The working hours is : " + x  + "<br />");
//     document.write("There is no overtime payment");
// }


// Question 10

// function withDraw(){
//     var amount = +prompt("Enter the amount");
// document.write("You will have the  notes of 100 is : " , Math.floor(amount / 100)+"<br />");
// document.write("You will have  the notes of 50 is : " , Math.floor((amount % 100) / 50)+"<br />");
// document.write("You will have the  notes of 10 is : " , Math.floor(((amount % 100) % 50) / 10));
// }

// withDraw();




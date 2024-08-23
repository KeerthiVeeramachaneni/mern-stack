document.write("welcome")
document.write('some text1323%'+"<br>")
/*document.write(12)
document.write(12.3)*/
//document.write("<br>")

//1.declaring variable
var a=10
document.write(a)
var name="john"
document.write(name)
//2.declaring var using let key word
let age=30
document.write(age)

//redeclaring variables
var a=10
var a="john"
document.write(a)
document.write("<br>")

//cant redeclare when used let
/*let var a=10
var a="john"
document.write(a)*/

//var can ne accesed out of block
{
    var a=20
}
document.write(a)
//prints a

//var cant be accesed out of block if used let
{
    let a=1000
}
document.write(a)
//doesnt print


//3.declaring var using const keyword-fixed wont change throw error
/*const a=89
a=90
document.write(a)*/

//to join multiple values
a=90,b="abs",c=12.3
document.write(a+" "+b+" "+c)

//operators
//arithmetic operators
// + - * / % **
a=9,b=20
document.write((a+b)+"<br>")
document.write((a-b)+"<br>")
document.write((a*b)+"<br>")
document.write((a/b)+"<br>")
document.write((a%b)+"<br>")
document.write((a**b)+"<br>")



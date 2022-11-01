// (ویرایش نشود)
// شما با ویرایش این فایل تمام قوانین موجود در فایل (قوانین.pdf) رو تایید کردید
//                                                  لینک فایل:
//     https://github.com/IrAliShahbazi/license/



//list
var list1 = [];
//a
var a1=false;
var a2 = false;
var a3 = false;
var a1char = "";
var a2char="";
var a3char="";
function a11() {
    if(a1 == false){
        document.getElementById("a1").innerHTML="O";
        a1char="O";
        a1 = true;
        list1.push("a1");
        if(a1char == "O" && a2char == "O" && a3char == "O") {
            alert("you win!");
            location.reload();
        }
        if(a1char == "O"&&b2char == "O" && c3char == "O"){
            alert("you win!");
            location.reload()
        }
        if(a1char == "O" && b1char == "O" && c1char=="O"){
            alert("you win!");
            location.reload()
        }
        if(list1.length == 7){
            location.reload()
        }else{
            x()
        }
    }
}
function a22() {
    if(a2 == false){
        document.getElementById("a2").innerHTML="O";
        a2char="O";
        a2 = true;
        list1.push("a2");
        if(a1char == "O" && a2char == "O" && a3char == "O"){
            alert("you win!");
            location.reload()
        }
        if(a2char == "O" && b2char == "O" && c2char=="O"){
            alert("you win!");
            location.reload()
        }
        if(list1.length == 7){
            location.reload()
        }else{
            x()
        }
    }
}
function a33() {
    if(a3 == false){
        document.getElementById("a3").innerHTML="O";
        a3char="O";
        a3 = true;
        list1.push("a3");
        if(a1char == "O" && a2char == "O" && a3char == "O"){
            alert("you win!");
            location.reload()
        }
        if(a3char == "O"&&b2char == "O" && c1char == "O"){
            alert("you win!");
            location.reload()
        }
        if(a3char == "O" && b3char == "O" && c3char=="O"){
            alert("you win!");
            location.reload()
        }
        if(list1.length == 7){
            location.reload()
        }else{
            x()
        }
    }
}
//b
var b1=false;
var b2 = false;
var b3 = false;
var b1char = "";
var b2char="";
var b3char="";
function b11() {
    if(b1 == false){
        document.getElementById("b1").innerHTML="O";
        b1char="O";
        b1 = true;
        list1.push("b1");
        if(b1char == "O" && b2char == "O" && b3char == "O"){
            alert("you win!");
            location.reload()
        }
        if(a1char == "O" && b1char == "O" && c1char=="O"){
            alert("you win!");
            location.reload()
        }
        if(list1.length == 7){
            location.reload()
        }else{
            x()
        }
    }
}
function b22() {
    if(b2 == false){
        document.getElementById("b2").innerHTML="O";
        b2char="O";
        b2 = true;
        list1.push("b2");
        if(b1char == "O" && b2char == "O" && b3char == "O"){
            alert("you win!");
            location.reload()
        }
        if(a1char == "O"&&b2char == "O" && c3char == "O"){
            alert("you win!");
            location.reload()
        }
        if(a3char == "O"&&b2char == "O" && c1char == "O"){
            alert("you win!");
            location.reload()
        }
        if(a2char == "O" && b2char == "O" && c2char=="O"){
            alert("you win!");
            location.reload()
        }
        if(list1.length == 7){
            location.reload()
        }else{
            x()
        }
    }
}
function b33() {
    if(b3 == false){
        document.getElementById("b3").innerHTML="O";
        b3char="O";
        b3 = true;
        list1.push("b3");
        if(b1char == "O" && b2char == "O" && b3char == "O"){
            alert("you win!");
            location.reload()
        }
        if(a3char == "O" && b3char == "O" && c3char=="O"){
            alert("you win!");
            location.reload()
        }
        if(list1.length == 7){
            location.reload()
        }else{
            x()
        }
    }
}
//c
var c1=false;
var c2 = false;
var c3 = false;
var c1char = "";
var c2char="";
var c3char="";
function c11() {
    if(c1 == false){
        document.getElementById("c1").innerHTML="O";
        c1char="O";
        c1 = true;
        list1.push("c1");
        if(c1char == "O" && c2char == "O" && c3char == "O"){
            alert("you win!");
            location.reload()
        }
        if(a3char == "O"&&b2char == "O" && c1char == "O"){
            alert("you win!");
            location.reload()
        }
        if(a1char == "O" && b1char == "O" && c1char=="O"){
            alert("you win!");
            location.reload()
        }
        if(list1.length == 7){
            location.reload()
        }else{
            x()
        }
    }
}
function c22() {
    if(c2 == false){
        document.getElementById("c2").innerHTML="O";
        c2char="O";
        c2 = true;
        list1.push("c2");
        if(c1char == "O" && c2char == "O" && c3char == "O"){
            alert("you win!");
            location.reload()
        }
        if(a2char == "O" && b2char == "O" && c2char=="O"){
            alert("you win!");
            location.reload()
        }
        if(list1.length == 7){
            location.reload()
        }else{
            x()
        }
    }
}
function c33() {
    if(c3 == false){
        document.getElementById("c3").innerHTML="O";
        c3char="O";
        c3 = true;
        list1.push("c3");
        if(c1char == "O" && c2char == "O" && c3char == "O"){
            alert("you win!");
            location.reload()
        }
        if(a1char == "O"&&b2char == "O" && c3char == "O"){
            alert("you win!");
            location.reload()
        }
        if(a3char == "O" && b3char == "O" && c3char=="O"){
            alert("you win!");
            location.reload()
        }
        if(list1.length == 7){
            location.reload()
        }else{
            x()
        }
    }
}
//x
function x() {
    var cha = ["","a","b","c"];
    while(true){
        var char = cha[Math.ceil(Math.random()*3)];
        var number = Math.ceil(Math.random()*3);
        var charO=char+number;
        if(charO == "a1"&&a1 == false){
            document.getElementById("a1").innerHTML="X";
            a1 = true;
            a1char="X";
            list1.push("a1");
            break;
        }
        if(charO == "a2"&&a2 == false){
            document.getElementById("a2").innerHTML="X";
            a2 = true;
            a2char="X";
            list1.push("a2");
            break;
        }
        if(charO == "a3"&&a3 == false){
            document.getElementById("a3").innerHTML="X";
            a3 = true;
            a3char="X";
            list1.push("a3");
            break;
        }
        //b
        if(charO == "b1"&&b1 == false){
            document.getElementById("b1").innerHTML="X";
            b1 = true;
            b1char="X";
            list1.push("b1");
            break;
        }
        if(charO == "b2"&&b2 == false){
            document.getElementById("b2").innerHTML="X";
            b2 = true;
            b2char="X";
            list1.push("b2");
            break;
        }
        if(charO == "b3"&&b3 == false){
            document.getElementById("b3").innerHTML="X";
            b3 = true;
            b3char="X";
            list1.push("b3");
            break;
        }
        //c
        if(charO == "c1"&&c1 == false){
            document.getElementById("c1").innerHTML="X";
            c1 = true;
            c1char="X";
            list1.push("c1");
            break;
        }
        if(charO == "c2"&&c2 == false){
            document.getElementById("c2").innerHTML="X";
            c2 = true;
            c2char="X";
            list1.push("c2");
            break;
        }
        if(charO == "c3"&&c3 == false){
            document.getElementById("c3").innerHTML="X";
            c3 = true;
            c3char="X";
            list1.push("c3");
            break;
        }
    }
}
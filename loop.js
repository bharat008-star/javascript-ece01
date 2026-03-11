// let count;
// document.write("starting loop <br>");
// for(count = 0; count < 10; count++){
//     document.write( "current count" + count + "<br>");
// }
// document.write("loop ended <br>")

const person={
    name:"ajay",
    age:25,
    city:"delhi"
};
for(let x in person){
    document.write(x + " : " + person[x] + "<br>");
}
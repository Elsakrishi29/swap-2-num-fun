let A=parseInt(prompt("Enter the A value"));
let B=parseInt(prompt("Enter the B value"));
let Temp;
function value(A,B){
    Temp=A;
    A=B;
    B=Temp;
    document.write("A value is " +A);
    document.write("<br>");
    document.write("B value is " +B);
    document.write("<br>");
}
value(A,B);
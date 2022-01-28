var A =[11,12,13,14,15,16,17,18,19,20];
var E=[]; 
var O = [];
var i;
for (i = 0; i <= A.length; i++) {
    if (A[i]%2 == 0) {
        E.push(A[i]);
        O.push(A[i+1]);
    }
   
}
console.log(E)
console.log(O);
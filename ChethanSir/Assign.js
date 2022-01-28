var A=[1,7,3,87,9,5,7,8,9];
var B=Math.max(...A);
var C=A.splice(A.indexOf(B),1);
console.log(A);
console.log(Math.max(...A));
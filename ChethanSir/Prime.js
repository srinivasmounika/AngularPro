// var a = [5, 9, 63, 29, 35, 6, 55, 23]
// var prime = [];

// function isPrime(item) {
//     var identifier = item / 2;
//       for (j = 2; j <= identifier; j++) {
//        if ((item % j) == 0) { 
//         return false;
//        } 
//      }
//      return true;
// }
// for (var index = 0; index < a.length; index++) {
//   if (isPrime(a[index])) {
//       prime.push(a[index])
//   }
// }

// console.log(prime);
var A=[32,45,76,98,21,43,31];
var prime=[];
function PrimeNum(item){
  var identifier=item / 2;
  for (j=2; j<=identifier;j++){
    if((item % j)==0){
      return false;
    }
  } 
  return true;
  }
  for (var index=0; index<A.length; index++){
    if(PrimeNum(A[index])){
prime.push(A[index])
    }
  }
  console.log(prime);
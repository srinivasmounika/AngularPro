var A={
    car:"Baleno",
    color:"blue",
    model:2019,
    }
    // console.log(A.car);
    var B=Object.values(A);
    console.log(B);
    
A.forEach((B,index)=>{
    console.log(`${B},${A[index]}`);
})
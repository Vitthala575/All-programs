let x=(num)=>{
    var result=1;
    for (let i = 1; i <= num; i++) {
      result=i*result
     
    }
    return result;
}
let z=x(5)
console.log(z);
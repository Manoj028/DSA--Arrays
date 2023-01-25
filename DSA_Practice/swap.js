function swapInt(arr){
    let temp = 0;
    let sum = 0;
    for(let i = 0;i<arr.length;i=i+2){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;

       
    }
    console.log(arr);

    for (let i=0;i<3;i++){
       sum += arr[i]
    }
   return sum;

    
}
console.log(swapInt([1,2,30,50]))

let int = 324124;
let str = int.toString();
console.log(str)

['1','2']
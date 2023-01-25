function mergeStr(str,arr){

  let Lstr = str.toLowerCase();
    
    let sumArr = [];

    for(let i = 0; i<str.length;i++){
       sumArr = arr[i]+Lstr.charCodeAt(i)-96;
       console.log(sumArr);
    }


}
console.log(mergeStr("ABCDE",[1,2,3,4,5]));
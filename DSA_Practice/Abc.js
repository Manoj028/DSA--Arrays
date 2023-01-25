function checkDivisibility(str){
    let number = 0 ;
    let n = 0;

    for(let i = 0 ; i< str.length;i++){
        number = str.charCodeAt(i)-65;
        console.log(number);
        n = n * 10 +number;
    }

    if(n%13===0){
        return "Yes";

    }
    else{
        return "No";
    }
}

console.log(checkDivisibility("ABD"))

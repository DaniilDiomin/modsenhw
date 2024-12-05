function countPositivesSumNegatives(input) {
    if(!Array.isArray(input)) return [];
    if(input.length==0) return [];
    let positiveCount = 0;
    let sumNegative = 0;
    for(num of input){
        if(num > 0) positiveCount++;
        if(num < 0) sumNegative += num;
    }
    return [positiveCount, sumNegative];
}

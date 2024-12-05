const average = (arr) => arr.reduce((acc, el)=>acc+el,0)/arr.length;
const sumAverage = (arr) => Math.floor(arr.reduce((acc,el)=>acc+average(el), 0));

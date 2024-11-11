function removeSmallest(numbers) {
  let newArr =numbers.slice(0);
  let minI = 0;
  for(i in numbers){
      if (numbers[i]<numbers[minI]) minI = i;
  }
  newArr.splice(minI, 1);
    
  return newArr;
}

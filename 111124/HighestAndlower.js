function highAndLow(numbers){
	  let arr = numbers.split(' ');
	  let min = arr[0];
	  let max = arr[0];
	  for(i in arr){
		        arr[i] = Number(arr[i]);
		        if(arr[i]<min) min = arr[i];
		        if(arr[i]>max) max = arr[i];
		    } 
	  return `${max} ${min}`
}

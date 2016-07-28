function bubbleSort(array){
  var isSorted = false;
  var big, small;
  this.counter = 0;
  while (!isSorted){
    this.counter ++;
    isSorted = true;
    for(var i =0; i < array.length - 1; i++){
      if (array[i] > array[i+1]){
        big = array[i];
        small = array[i+1]
        array[i] = small;
        array[i+1] = big;
        isSorted = false
      }
    }
  }
return array;
}

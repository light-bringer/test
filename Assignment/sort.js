



module.exports.bubblesort=function(items) {  
    var length = items.length;
    for (var i = (length - 1); i >= 0; i--) {
    
        for (var j = (length - i); j > 0; j--) {
     
            if (items[j] < items[j - 1]) {
     
                var tmp = items[j];
                items[j] = items[j - 1];
                items[j - 1] = tmp;
            }
        }
    }
	return(items);
}

module.exports.selectionSort=function(items){

    var len = items.length,
        min;
    var temp;

    for (i=0; i < len; i++){

        min = i;

        for (j=i+1; j < len; j++){
            if (items[j] < items[min]){
                min = j;
            }
        }

        if (i != min){
            //swap(items, i, min);
            temp=items[min];
            items[min]=items[i];
            items[i]=temp;
        }
    }

   return(items);
}


module.exports.insertionSort=function(values) {
  var length = values.length;
  for(var i = 1; i < length; ++i) {
    var temp = values[i];
    var j = i - 1;
    for(; j >= 0 && values[j] > temp; --j) {
      values[j+1] = values[j];
    }
    values[j+1] = temp;
  }

    return(values);
}

var searching= require('./search.js');
var sorting=require('./sort.js');
var array =[1,2,3,4,5,6,7]
var array1=[7,6,5,4,3,2,1]
var array2=[15,14,13,12,11]
var array3=[25,24,23,22,21]
console.log("After Linear searching :"+searching.LinearSearch(array,4))
console.log("After Binary searching :"+searching.binarySearch(array,5))
var result=sorting.bubblesort(array1);
console.log("After bubble sort :"+result);

result=sorting.selectionSort(array2);
console.log("After selection sort :"+ result);

var result=sorting.insertionSort(array3);
console.log("After insertion Sort :"+ result);
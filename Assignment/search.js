

module.exports.binarySearch= function(items, value){

    var startIndex  = 0,
        stopIndex   = items.length - 1,
        middle      = Math.floor((stopIndex + startIndex)/2);

    while(items[middle] != value && startIndex < stopIndex){

        if (value < items[middle]){
            stopIndex = middle - 1;
        } else if (value > items[middle]){
            startIndex = middle + 1;
        }

        middle = Math.floor((stopIndex + startIndex)/2);
    }
    var out = (items[middle] != value) ? -1 : middle;

    return out
}

 module.exports.LinearSearch=function(items,value){

    for(var i=0;i<items.length;i++){

        if(items[i]==value)
        {
            return i;
        }
    }
    return -1;


 }

function chunkArrayInGroups(arr, size) {
    // Break it up.
    var cont = 0;
    var tempArray = [];
    var resultArray = [];
    for (var i = 0; i< arr.length;i++){
      cont++;
      tempArray.push(arr[i]);    
      if (cont == size){
        cont = 0;
        resultArray.push(tempArray);
      }
      
    }
    return resultArray;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  
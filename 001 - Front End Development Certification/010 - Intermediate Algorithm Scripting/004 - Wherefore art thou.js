
function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var keys = Object.keys(source);       
    
    collection.forEach(element => {
        for (var i=0; i<=keys.length; i++){
            if (collection.hasOwnProperty(keys[i])){
                arr.push(element);
                break;
            }
        }        
    });
    
    console.log(arr);
    
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { first: "Tybalt", last: "Capulet" });
  
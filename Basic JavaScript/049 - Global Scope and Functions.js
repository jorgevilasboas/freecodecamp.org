// Declare your variable here
var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
}

// Only change code above this line
function fun2() {
    var output = "";
    oopsGlobal = 5;
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
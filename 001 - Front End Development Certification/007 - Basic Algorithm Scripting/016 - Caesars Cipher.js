function rot13(str) { // LBH QVQ VG!
  var strArray = str.split("");
  var returnedArray = [];
  var arr = [];
  var num = 0;
  for (var i = 65; i <= 90; i++) {
    arr.push(String.fromCharCode(i));
  }
  strArray.forEach(function (element) {
    if (arr.includes(element)) {
      num = element.charCodeAt(0);
      if (num <= 77) num += 26;
      num -= 13;
      returnedArray.push(String.fromCharCode(num))
    } else {
      returnedArray.push(element);
    }
  });
  return returnedArray.join("");
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));



//console.log("N".charCodeAt(0));
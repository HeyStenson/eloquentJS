function makeTriangle(n) {
  var result = "";
  for (var i = 1; i <= n; i++){
    result += "#";
    console.log(result);
  }
}

makeTriangle(7);

// Official solution:
// for (var line = "#"; line.length < 8; line += "#")
//   console.log(line);

function fizzbuzz(n) {
  for(var i = 1; i <= n; i++){
    if (i % 15 === 0){
      console.log("fizzbuzz");
    } else if (i % 3 === 0){
      console.log("fizz");
    } else if (i % 5 === 0){
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz(12);

// Official solution:
// for (var n = 1; n <= 100; n++) {
//   var output = "";
//   if (n % 3 == 0)
//     output += "Fizz";
//   if (n % 5 == 0)
//     output += "Buzz";
//   console.log(output || n);
// }
// Ugh this one is much nicer than mine.

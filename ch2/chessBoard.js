function chessBoard(n){
  var output = "";
  for (var j = 0; j < n; j++) {
    for (var i = 0; i < n; i++) {
      if ((i + j) % 2 == 0)
        output += " ";
      else
        output += "#";
    }
    output += "\n";
  }
  console.log(output);
};
chessBoard(8);

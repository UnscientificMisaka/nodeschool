//   file://E:\nodejs\node_global\node_modules\learnyounode\node_apidoc\fs.html

//   Buffer objects are Node's way of efficiently representing arbitrary arrays
//   of data, whether it be ascii, binary or some other format. Buffer objects
//   can be converted to strings by simply calling the toString() method on
//   them. e.g. var str = buf.toString().

//   Documentation on Buffers can be found by pointing your browser here:
//   file://E:\nodejs\node_global\node_modules\learnyounode\node_apidoc\buffer.
//   html

//   If you're looking for an easy way to count the number of newlines in a
//   string, recall that a JavaScript String can be .split() into an array of
//   substrings and that '\n' can be used as a delimiter. Note that the test
//   file does not have a newline character ('\n') at the end of the last line,
//   so using this method you'll end up with an array that has one more element
//   than the number of newlines.
var fs = require('fs');
var content = fs.readFileSync(process.argv[2]);
console.log(content.toString().split('\n').length - 1)
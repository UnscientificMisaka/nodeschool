var LS = require('./FilteredLS.js');

LS(process.argv[2], process.argv[3], (err, list) => {
    if(err) console.log(err)
    list.forEach((i) => console.log(i));
});
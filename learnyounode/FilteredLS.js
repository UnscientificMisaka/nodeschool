var fs = require('fs');
var path = require('path');
// fs.readdir(process.argv[2],(err, list) => {
//     list.forEach((i) => {
//         if(path.extname(i) === '.' + process.argv[3]) console.log(i)
//     })
// });

module.exports = (dir, ext, callback) => {
    fs.readdir(dir,(err, list) => {
        if(err) return callback(err);
        // dont'use map ,if != map will reflect undefined
        var res = list.filter((i) => {
            if(path.extname(i) === '.' + ext) return i;
        })
        callback(null, res)
    });    
};

// if i use exports,exports is a reference of module.exports 
// when init,module.exports = {}
// exports.filter = (dir, ext, callback) => {
//     fs.readdir(dir,(err, list) => {
//         if(err) return callback(err);
//         // dont'use map ,if != map will reflect undefined
//         var res = list.filter((i) => {
//             if(path.extname(i) === ext) return i;
//         })
//         console.log(res)
//         callback(null, res)
//     });    
// };

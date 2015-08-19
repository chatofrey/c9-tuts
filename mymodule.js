var fs = require("fs");
var path = require("path");
       
module.exports = function(mPath, mExtFile, cb){
    // function cb(err, data) {...}
    // var cb = function(err, data){...};
        var data = [];
        if(typeof cb === "function"){
        fs.readdir(mPath, function(err, files){
            if(err) return cb(err);
            for(var i in files){
                var file = files[i];
                if(path.extname(file) === '.' + mExtFile){
                    data.push(file);
                }
            }
            cb(null, data);
        });
        }
}
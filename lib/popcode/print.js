module.exports = function (data) {
    var jade = require('jade');

    if (typeof(data.rowstart)=='undefined') {
        data.rowstart = 1
    }
    if (typeof(data.colstart)=='undefined') {
        data.colstart = 1
    }

    var html = jade.renderFile('../lib/popcode/popcodes.jade',data);

    var fs = require('fs');
    fs.writeFile("popcodes.html", html, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("popcodes.html ready to print");
    }); 

}

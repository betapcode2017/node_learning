var fs = require('fs');
fs.readFile('resource.json','utf-8', function (er, data) {  //put utf-8 to receive string instead of buffer
    console.log(data);
    var obj = JSON.parse(data);
    var person = obj.person;
    person.forEach(function (p) {
        console.log(' '+p.name+' '+p.phone);
    });
});
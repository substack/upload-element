var upload = require('../');

var elem = document.querySelector('#upload')
upload(elem, function (files) {
    files.forEach(function (file) {
        document.querySelector('#target').innerHTML += file.source;
    });
});

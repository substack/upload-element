var upload = require('../');

var elem = document.querySelector('#upload')
upload(elem, function (err, results) {
    results.forEach(function (r) {
        document.querySelector('#target').innerHTML += r.target.result;
    });
});

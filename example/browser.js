var upload = require('../');

var elem = document.querySelector('#upload')
upload(elem, { type: 'text' }, function (err, results) {
    results.forEach(function (r) {
        document.body.innerHTML += r.target.result;
    });
});

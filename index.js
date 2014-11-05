module.exports = function (elem, opts, cb) {
    if (typeof opts === 'function') {
        cb = opts;
        opts = {};
    }
    if (typeof opts === 'string') opts = { type: opts };
    
    elem.addEventListener('change', function (ev) {
        if (elem.files.length === 0) return cb(null, []);
        
        var reader = new FileReader;
        var index = 0;
        var results = [];
        
        reader.addEventListener('load', function (e) {
            results.push({
                file: elem.files[index],
                target: e.target
            });
            index ++;
            if (index === elem.files.length) cb(null, results)
            else read(index)
        });
        read(index);
        
        function read (index) {
            var file = elem.files[index];
            if (opts.type === 'text') {
                reader.readAsText(file);
            }
            else if (opts.type === 'url') {
                reader.readAsDataURL(file);
            }
            else reader.readAsArrayBuffer(file);
        }
    });
};

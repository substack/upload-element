module.exports = function (elem, cb) {
    elem.addEventListener('change', function (ev) {
        if (elem.files.length === 0) return cb([]);
        
        var reader = new FileReader;
        var index = 0;
        var results = [];
        
        reader.addEventListener('load', function (e) {
            results.push({
                file: elem.files[index],
                target: e.target,
                source: e.target.result
            });
            index ++;
            if (index === elem.files.length) cb(results)
            else read(index)
        });
        read(index);
        
        function read (index) {
            reader.readAsText(elem.files[index]);
        }
    });
};

# upload-element

read files from html `<input type="file">` elements

# example

First write some html with an `<input type="file">` element:

``` html
<html>
  <body>
    <input id="upload" type="file" multiple>
    <script src="bundle.js"></script>
  </body>
</html>
```

``` js
var upload = require('upload-element');

var elem = document.querySelector('#upload')
upload(elem, { type: 'text' }, function (err, files) {
    files.forEach(function (file) {
        document.bodyinnerHTML += file.target.result;
    });
});
```

# methods

``` js
var upload = require('upload-element')
```

## upload(elem, opts, cb)

Read `elem`, an `<input type="file">` or `<input type="file" multiple>`
element.

When the user uploads a file and all the files have been read,
`cb(err, results)` fires with an error or the list of files.

`results` is an array of objects, each with:

* `result.target` - target object, has `result` property with the string or
arraybuffer of the file contents
* `result.file` - file object, has `name` and other properties

Set `opts.type` to control the type of `result.target.result`:

* `'text'` - string of content
* `'url'` - string base64 data url
* `'array'` - arraybuffer of content (default)

# install

With [npm](https://npmjs.org) do:

```
npm install upload-element
```

# license

MIT

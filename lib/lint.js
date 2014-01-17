var QFS = require('q-io/fs'),
    bemhtml = require('bemhtml/blocks-common/i-bem/__html/lib/bemhtml/api');

exports.lintFile = function lintFile(file) {
    return QFS.read(file)
        .then(function(source) {
            return lintSource(source, file); 
        });
};

function lintSource(source, fileName) {
    try {
        bemhtml.parse(source);
    } catch(e) {
        return [{
            fileName: fileName,
            message: e.message,
            line: e.line,
            column: e.column
        }];
    }
}

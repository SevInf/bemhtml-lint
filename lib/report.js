var util = require('util');

module.exports = function report(errors) {
    errors.forEach(function(error) {
        console.log(util.format('%s:%d:%d: %s', 
            error.fileName,
            error.line,
            error.column,
            error.message));
    });
};

'use strict';

var Q = require('q'),
    glob = require('glob'),
    lint = require('./lint');

function flattern(array) {
    return Array.prototype.concat.apply([], array);
}

module.exports = function traverse(patterns) {
    return Q.all(patterns.map(traversePattern)).then(function(errors) {
        return flattern(errors);
    });
};

function traversePattern(pattern) {
    var deferred = Q.defer();
    glob(pattern, function(err, files) {
        if (err) {
            return deferred.reject(err);
        }

        Q.all(files.map(function (file) {
            deferred.notify(file);
            return lint.lintFile(file);
        })).then(function(errors) {
            deferred.resolve(flattern(errors));
        });

    });
    return deferred.promise;
}

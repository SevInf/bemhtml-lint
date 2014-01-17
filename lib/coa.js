var path = require('path'),
    traverse = require('./traverse'),
    report = require('./report');

module.exports = require('coa').Cmd()
    .name(path.basename(process.argv[1]))
    .title('bemhtml lint tool')
    .helpful()
    .opt()
        .name('version')
        .short('v').long('version')
        .title('Show version')
        .flag()
        .only()
        .act(function() {
            var p = require('../package.json');
            return p.name + ' ' + p.version;
        })
        .end()
    .arg()
        .name('files')
        .title('Files to check. Can be glob patterns')
        .arr()
        .end()
    .act(function(opts, args) {
        return traverse(args.files).then(report).done();
    });


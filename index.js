var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

module.exports = function youKnowWhat(browserifyOptions, outputFileName) {
	var b = browserify(browserifyOptions);

	return b.bundle()
		.pipe(source(outputFileName))
		.pipe(buffer());

};

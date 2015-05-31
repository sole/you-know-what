# you-know-what

> A plug-in for using browserify with gulp

Once upon a time you could just install `gulp-browserify` and get it to work, but apparently not anymore for some reason I am not aware of.

So the recommended way (at the time of writing) is to use the original modules: browserify, vinyl-source-stream and vinyl-buffer and make them perform an elaborate dance.

Of course I can't for the life of me remember how to pipe all those plug-ins in order. So here's my *Don't-Repeat-Yourself* trick.

## Syntax

```javascript
youKnowWhat(browserifyOptions, outputFileName)
```

## Install

```bash
npm install you-know-what
```

## Usage

Then in your `gulpfile.js`:

```javascript
var youKnowWhat = require('you-know-what');
var gulp = require('gulp');

gulp.task('build-js', function() {
	return youKnowWhat({
		entries: 'src/main.js',
		debug: false
	}, 'bundle.js')
	.pipe(gulp.dest('buildDir'));
});
```

## What's with that silly name...?

The reason it is named this way is to prevent anyone from Gulp think that this is an official plug-in and try to ban it as I heard they did with another plug-in. 
Also I'm reading Harry Potter books and I love how they refer to *You Know Who*. The idea of `require'ing('you-know-what')` is just TOO funny and I just couldn't resist.

Read more books. It will give you ideas for silly module names and we'll all confuse everyone. Isn't it great!?

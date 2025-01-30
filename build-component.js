const fs = require('fs-extra');
    const concat = require('concat');
    
    build = async () =>{
        const files = [
            './dist/angular-tour-of-heroes/runtime-es5.js',
            './dist/angular-tour-of-heroes/runtime-es2015.js',
            './dist/angular-tour-of-heroes/polyfills-es2015.js',
            './dist/angular-tour-of-heroes/polyfills-es5.js',
			'./dist/angular-tour-of-heroes/main-es5.js',
            './dist/angular-tour-of-heroes/main-es2015.js'
          ];
        
          await fs.ensureDir('widget');
          await concat(files, 'widget/news-widget.js');
    }
    build();
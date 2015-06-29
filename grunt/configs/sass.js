/**
 * grunt-sass: Compile Sass to CSS using node-sass
 *
 * {@link} https://github.com/sindresorhus/grunt-sass
 */
module.exports = {

    dev: {
        options: {
            outputStyle: 'nested',
            sourceMap: true
        },
        files: {
            '<%= paths.dev %>/css/styles.css': '<%= paths.tmp %>/styles.scss'
	        //'<%= paths.dev %>/css/universal.css': '<%= paths.src %>/sass/universal.scss'
        }
    },
	dist: {
		options: {
			outputStyle: 'nested',
			sourceMap: false
		},
		files: {
			'<%= paths.dist %>/css/styles.css': '<%= paths.src %>/sass/styles.scss'
			//'<%= paths.dist %>/css/universal.css': '<%= paths.src %>/sass/universal.scss'
		}
	}
}

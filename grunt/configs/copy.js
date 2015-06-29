/**
 * Copy files and folders.
 *
 * {link} https://github.com/gruntjs/grunt-contrib-copy
 */

module.exports = {
	favicon: {
		cwd: '<%= paths.src %>/img/appicons/',
		dest: '<%= paths.dist %>/img/appicons/',
		expand: true,
		src: ['**/*.ico']
	},
	//fonts: {
	//	cwd: '<%= paths.src %>/fonts/',
	//	dest: '<%= paths.dist %>/fonts/',
	//	expand: true,
	//	src: ['**/*']
	//},
};

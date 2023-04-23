var fs = require('fs')
var config = require('./config')
var {
	startObfuscate
} = require('./obfuscate')
var cmt = {
	a: '/*\nJavascript Project Obfuscator \n Coded By Ravindu Manoj\n\nModified File : #filename#\nModified Date : #date#\nModified Time : #time#\n*/\n\n',
	b: '\n\n// Powered By https://www.npmjs.com/package/@ravindu01manoj/obfuscator'
}
/**
 * @param source_folder enter the project source path for it
 * @param store_folder enter the store path for save ob files
 * @param Bin_Path bin path for save cache
 * @param Config config for obfuscate
 * @param Comment Object({top: '',bottom: '',dont_set : false,timeZone : '',deactive : false})
 */
function obfuscate(source_folder = '', store_folder = '', Config, Comment = {},Bin_Path = '') {
	var error = !source_folder ? 'Need Sources Folder' : !store_folder ? 'Need Store Folder' : !Bin_Path ? 'Need Bin Folder' : !Config ? 'Need Config For Obfuscate' : !fs.lstatSync(source_folder).isDirectory() ? 'Not Found Folder Like ' + source_folder : false
	if (error) {
		throw new Error(error)
	}

	if (!source_folder.endsWith('/')) {
		source_folder += '/'
	}
	if (!source_folder.endsWith('/')) {
		source_folder += '/'
	}
	if (!Bin_Path.endsWith('/')) {
		Bin_Path += '/'
	}
	Comment.top = Comment.top ? (Comment.dont_set ? Comment.top : (Comment.top.includes('\n') ? `/*\n${Comment.top}\n*/\n\n` : '// ' + Comment.top + '\n\n')) : cmt.a
	Comment.bottom = Comment.bottom ? (Comment.dont_set ? Comment.bottom : (Comment.bottom.includes('\n') ? `\n/*\n${Comment.bottom}\n*/\n\n` : '\n\n// ' + Comment.bottom)) : cmt.b
	if (Comment.deactive === true) Comment.top = Comment.bottom = '';
	startObfuscate(source_folder, store_folder, Config, Comment,Bin_Path)
}

module.exports = {
	obfuscate,
	...config
}
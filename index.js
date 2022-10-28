var fs = require('fs')
var config = require('./config')
var {
	startObfuscate
} = require('./obfuscate')
var cmt = {
	a: '/*\nJavascript Project Obfuscator \n Coded By Ravindu Manoj\n\nModified File : #filename#\nModified Date : #date#\nModified Time : #time#\n*/\n\n',
	b: '\n\n// Powered By https://www.npmjs.com/package/@ravindu01manoj/obfuscator'
}

function obfuscate(source_folder, store_folder, Config, Comment = {}) {
	if (!source_folder) {
		throw new Error('Need Sources Folder')
	}

	if (!store_folder) {
		throw new Error('Need Store Folder')
	}

	if (!Config) {
		throw new Error('Need Config For Obfuscate')
	}

	if (!fs.lstatSync(source_folder).isDirectory()) {
		throw new Error('Not Found Folder Like ' + source_folder)
	}

	if (!source_folder.endsWith('/')) {
		source_folder += '/'
	}

	if (!store_folder.endsWith('/')) {
		store_folder += '/'
	}
	Comment.top = Comment.top ? (Comment.dont_set ? Comment.top : (Comment.top.includes('\n') ? `/*\n${Comment.top}\n*/\n\n` : '// ' + Comment.top + '\n\n')) : (Comment.bottom ? '' : cmt.a)
	Comment.bottom = Comment.bottom ? (Comment.dont_set ? Comment.bottom : (Comment.bottom.includes('\n') ? `\n/*\n${Comment.bottom}\n*/\n\n` : '\n\n// ' + Comment.bottom)) : (Comment.top ? '' : cmt.b)
	if (Comment.deactive === true) Comment.top = Comment.bottom = '';
	startObfuscate(source_folder, store_folder, Config, Comment)
}

module.exports = {
	obfuscate,
	...config
}
var fs = require('fs')
var config = require('./config')
var { startObfuscate } = require('./obfuscate')
function obfuscate(source_folder, store_folder, config) {

	if(!source_folder) {
		throw new Error('Need Sources Folder')
	}

	if(!store_folder) {
		throw new Error('Need Store Folder')
	}

	if(!config) {
		throw new Error('Need Config For Obfuscate')
	}

	if(!fs.lstatSync(source_folder).isDirectory()) {
		throw new Error('Not Found Folder Like ' + source_folder)
	}

	if(!source_folder.endsWith('/')) {
		source_folder += '/'
	}

	if(!store_folder.endsWith('/')) {
		store_folder += '/'
	}

	startObfuscate(source_folder, store_folder, config)
}

module.exports = {
	obfuscate, ...config
}
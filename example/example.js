const {
	obfuscate,
	BEST_NODE_HIGH_PERFORMANCE_CONFIG,
	HIGH_OB_LOW_PERFORMANCE_CONFIG,
	MEDIUM_OB_OPTIMAL_PERFORMANCE_CONFIG,
	LOW_OB_HIGH_PERFORMANCE_CONFIG,
	DEFAULT_PRESET_HIGH_PERFORMANCE_CONFIG
} = require('@ravindu01manoj/obfuscator')

const Source_Folder = '/example/folder/'
const Store_Folder = '/example/obstore/'
const Bin_Path = '/example/.bin/'

const Comment = {
	top: 'Javascript Project Obfuscator \n Coded By Ravindu Manoj\n\nModified File : #filename#\nModified Date : #date#\nModified Time : #time#',
	bottom: 'Powered By https://www.npmjs.com/package/@ravindu01manoj/obfuscator',
	dont_set : false,
	timeZone : 'Asia/Colombo', // Time Zone For #time# && #date#
	deactive : false //set value as true to deactive comments 
}
// keywords == #filename# && #date# && #time# 

function start() {
	obfuscate(Source_Folder, Store_Folder, BEST_NODE_HIGH_PERFORMANCE_CONFIG,Comment,Bin_Path)
}

start()
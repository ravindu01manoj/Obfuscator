const { obfuscate, BEST_NODE_HIGH_PERFORMANCE_CONFIG } = require('../../code')
const main = './Normal/'
const Ob_Path = './Obfuscate/'
const Comment = {
	top: 'Javascript Project Obfuscator \n Coded By Ravindu Manoj\n\nModified File : #filename#\nModified Date : #date#\nModified Time : #time#',
	bottom: 'Powered By https://www.npmjs.com/package/@ravindu01manoj/obfuscator',
	dont_set : false,
	timeZone : 'Asia/Colombo', // Time Zone For #time# && #date#
	deactive : false //set value as true to deactive comments 
}
// keywords == #filename# && #date# && #time# 

function obfuscateFolder() {
	console.log('starting...')
	obfuscate(main, Ob_Path, BEST_NODE_HIGH_PERFORMANCE_CONFIG,Comment)
	console.log(main + 'Folder Successful Obfuscated To ' + Ob_Path)
}

obfuscateFolder()
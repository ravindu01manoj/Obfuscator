const { obfuscate, BEST_NODE_HIGH_PERFORMANCE_CONFIG } = require('..')
const main = './Normal/'
const Ob_Path = './Obfuscate/'

function obfuscateFolder() {
	console.log('starting...')
	obfuscate(main, Ob_Path, BEST_NODE_HIGH_PERFORMANCE_CONFIG)
	console.log(main + 'Folder Successfull Obfuscated To ' + Ob_Path)
}

obfuscateFolder()
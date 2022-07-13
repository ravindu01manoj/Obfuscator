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

function start() {
	obfuscate(Source_Folder, Store_Folder, BEST_NODE_HIGH_PERFORMANCE_CONFIG)
}

start()
# Best Javascript Obfuscator With Obfuscator.io

***

- [Ravindu Manoj](https://github.com/ravindu01manoj/)

***

## Installation 
```sh
npm i @ravindu01manoj/obfuscator
## or
yarn add @ravindu01manoj/obfuscator
```

***

## Example
```ts
const { obfuscate, BEST_NODE_HIGH_PERFORMANCE_CONFIG } = require('@ravindu01manoj/obfuscator')
const Source_Folder = '/example/folder/'
const Store_Folder = '/example/obstore/'

function obfuscateFolder() {
	console.log('starting...')
	obfuscate(Source_Folder, Store_Folder, BEST_NODE_HIGH_PERFORMANCE_CONFIG)
	console.log(Source_Folder + 'Folder Successfull Obfuscated To ' + Store_Folder)
}

obfuscateFolder()

```

***

## Obfuscate Configs 

### You Can Use
```ts
const {
	BEST_NODE_HIGH_PERFORMANCE_CONFIG,
	HIGH_OB_LOW_PERFORMANCE_CONFIG,
	MEDIUM_OB_OPTIMAL_PERFORMANCE_CONFIG,
	LOW_OB_HIGH_PERFORMANCE_CONFIG,
	DEFAULT_PRESET_HIGH_PERFORMANCE_CONFIG
} = require('@ravindu01manoj/obfuscator')

```
# or

```ts
const config = {
		compact: true,
		controlFlowFlattening: true,
		controlFlowFlatteningThreshold: 0.75,
		deadCodeInjection: true,
		deadCodeInjectionThreshold: 0.4,
		debugProtection: false,
		debugProtectionInterval: 0,
		disableConsoleOutput: false,
		domainLock: [],
		domainLockRedirectUrl: 'about:blank',
		forceTransformStrings: [],
		identifierNamesCache: null,
		identifierNamesGenerator: 'hexadecimal',
		identifiersDictionary: [],
		identifiersPrefix: '',
		ignoreRequireImports: false,
		inputFileName: '',
		log: false,
		numbersToExpressions: true,
		optionsPreset: 'default',
		renameGlobals: false,
		renameProperties: false,
		renamePropertiesMode: 'safe',
		reservedNames: [],
		reservedStrings: [],
		seed: 0,
		selfDefending: false,
		simplify: true,
		sourceMap: false,
		sourceMapBaseUrl: '',
		sourceMapFileName: '',
		sourceMapMode: 'separate',
		sourceMapSourcesMode: 'sources-content',
		splitStrings: true,
		splitStringsChunkLength: 10,
		stringArray: true,
		stringArrayCallsTransform: true,
		stringArrayCallsTransformThreshold: 0.5,
		stringArrayEncoding: [],
		stringArrayIndexesType: [
			'hexadecimal-number'
		],
		stringArrayIndexShift: true,
		stringArrayRotate: true,
		stringArrayShuffle: true,
		stringArrayWrappersCount: 1,
		stringArrayWrappersChainedCalls: true,
		stringArrayWrappersParametersMaxCount: 2,
		stringArrayWrappersType: 'variable',
		stringArrayThreshold: 0.75,
		target: 'node',
		transformObjectKeys: true,
		unicodeEscapeSequence: true
	}

```

***

thanks to https://obfuscator.io/
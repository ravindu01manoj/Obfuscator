# Javascript  Project Obfuscator

## Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Author](#author)

## About <a name = "about"></a>

Obfuscate All JavaScript Files In One Click

## Getting Started <a name = "getting_started"></a>

Install The Package Using yarn Or npm

### Installing

```sh
npm i @ravindu01manoj/obfuscator
## or
yarn add @ravindu01manoj/obfuscator
```

## Usage <a name = "usage"></a>

```ts
const { obfuscate, BEST_NODE_HIGH_PERFORMANCE_CONFIG } = require('@ravindu01manoj/obfuscator')
const Source_Folder = '/example/folder/'
const Store_Folder = '/example/obstore/'

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
	obfuscate(Source_Folder, Store_Folder, BEST_NODE_HIGH_PERFORMANCE_CONFIG,Comment)
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
## or

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
## ✍️ Author <a name = "author"></a>

- [@Ravindu Manoj](https://github.com/ravindu01manoj)
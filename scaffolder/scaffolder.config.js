const execSync = require('child_process');

module.exports = {
	functions: {
		date: (ctx) => {
			return `date:${new Date().getDate()}`;
		},
	},
	parametersOptions: {
		compName: {
			question: 'Enter the name of your component:',
		},
		moduleName: {
			question: 'Whats your module name?',
		},
		ownerName: {
			question: 'Whats your name?',
		}	
	},
	templateOptions: {
		"typescript-module": {
			hooks: {
				preTemplateGeneration: (ctx) => {
					execSync(`cd ${ctx.targetRoot} && git init && npm i`)
				}
			}
		}
	}
}

const { execSync } = require('child_process');

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
	templatesOptions: {
		"typescript-module": {
			hooks: {
				postTemplateGeneration: (ctx) => {
					execSync(`cd ${ctx.targetRoot}/${ctx.parametersValues.moduleName} && git init && npm i`, {stdio: 'inherit'})
				}
			}
		}
	}
}

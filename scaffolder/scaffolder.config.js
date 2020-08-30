const { spawnSync } = require('child_process');

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
					const modulePath = `${ctx.targetRoot}/${ctx.parametersValues.moduleName}`
					spawnSync( npm, ['install'], {
						cwd: modulePath
			   })
				}
			}
		}
	}
}

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
					const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
					const modulePath = `${ctx.targetRoot}/${ctx.parametersValues.moduleName}`
					setTimeout(() => spawnSync( npm, ['install'], {
						cwd: modulePath,
						stdio: "inherit"
			   }),2000)
				}
			}
		}
	}
}

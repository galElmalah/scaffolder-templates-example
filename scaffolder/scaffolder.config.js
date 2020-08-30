const fs = require('fs');

module.exports = {
	functions: {
		date: (ctx) => {
			return `date:${new Date().getDate()}`;
		},
	},
	parametersOptions: {
		compName: {
			question: 'Enter the name of your component:',
	}
}
}

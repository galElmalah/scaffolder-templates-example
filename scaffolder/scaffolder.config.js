const fs = require('fs');

module.exports = {
	transformers: {
		toUpper: (value) => value.toUpperCase(),
		test: (value, ctx) => JSON.stringify(ctx),
	},
	functions: {
		date: (ctx) => {
			return `date:${new Date().getDate()}`;
		},
	},
	parametersOptions: {
		key: {
			question: 'enter a value for this key',

	}
}
}

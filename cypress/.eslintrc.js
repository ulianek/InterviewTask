/* eslint-disable */

module.exports = {
	plugins: ['cypress'],
	extends: ['plugin:cypress/recommended'],
	env: { 'cypress/globals': true },
	rules: {
		'jest/expect-expect': 0,
		'jest/no-done-callback': 0,
		'jest/valid-describe': 0,
		'jest/valid-expect': 0,
		'jest/valid-expect-in-promise': 0,
		'no-unused-expressions': 0,
	},
}

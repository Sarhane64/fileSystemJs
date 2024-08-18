import chalk from 'chalk'

const log = console.log;

// Generate Color Log in Prompt
log(chalk.blue("test"))

// Generate Hexa
log(chalk.hex('#DEADED').bold('Bold gray!'));

// Combine Condition
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// Error log
const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));

// Log with variable
const name = 'WCS';
console.log(chalk.green('Hello %s'), name);
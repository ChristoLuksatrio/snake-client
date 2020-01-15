const { connect } = require('./client');
console.log('Connecting ...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(callback) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', callback);
  return stdin;

}

const handleUserInput = (move) => {
  if (move === '\u0003') {
    process.exit();
  };
  console.log(move);
}

setupInput(handleUserInput)

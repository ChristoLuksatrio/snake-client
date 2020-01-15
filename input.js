let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin; //allows you to input data straight from keyboard when you run program
  stdin.setRawMode(true); // set up to handle data from keyboard
  stdin.setEncoding('utf8'); // set up to handle data from keyboard
  stdin.resume();
  stdin.on('data', (data) => {
    handleUserInput(data);
  }); //handles the data
  return stdin;
};


const handleUserInput = function(data){ 
  if (data === '\u0003') {
  process.exit();
  }   
  if (data === 'w') {
  console.log("up");
  }  
  if (data === 'a') {
  console.log("left");
  }
  if (data === 's') {
  console.log("down");
  }
  if (data === 'd') {
  console.log("right");
  };
  if (data === 'q') {
  connection.write('Say: Helllooooo WORRLLLDDDDD!');
  };
};


module.exports = { setupInput };


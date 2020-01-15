const net = require('net');
const { IP, PORT } = require('./constants');


const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    conn.write("Name: CHR");
    // setInterval(() => { // moves our snake up every 50ms
    //   conn.write("Move: up");
    // }, 50)
    // setTimeout(() => { // moves our snake left within 50ms. Can be duplicated
    //   conn.write("Move: left");
    // }, 50)
  });
  return conn;
}
connect();

module.exports = { connect };
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

//Whenever someone connects this gets executed
io.on('connection', (socket) => {
  console.log('A user connected');

  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', () => {
     console.log('A user disconnected');
  });
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

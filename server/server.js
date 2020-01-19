import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';
import io from 'socket.io';
import setRoutes from "./config/routes";

const app = express();
http.Server(app);

const socketIO = io(http);

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

setRoutes(app);

//Whenever someone connects this gets executed
socketIO.on('connection', (socket) => {
  console.log('A user connected');

  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', () => {
     console.log('A user disconnected');
  });
});

app.listen(PORT, () => {
  console.log('App listening on port 5000!')
});

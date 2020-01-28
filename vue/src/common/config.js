import Vue from 'vue';
import socketio from 'socket.io';
import VueSocketIO from 'vue-socket.io';

export const SocketInstance = socketio(IO_URL);

Vue.use(VueSocketIO, SocketInstance, MyVuexStore);

const BASE_URL = 'localhost:5000';
export const IO_URL = `http://${BASE_URL}`;
export const API_URL = `http://${BASE_URL}/api/`;
export default API_URL;

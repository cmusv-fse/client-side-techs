import { io } from 'socket.io-client';

const socket = io();
socket.on('connect', () => {
  alert('socket connected');
})

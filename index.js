const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chat message', (msg, username) => {
        console.log('message: ' + msg + " username: " + username);
        io.emit('chat message', msg, username);
    });

    socket.on('sendUsername', (username) => {
        console.log('username: ' + username);
        io.emit('chat message', '', username);
    });

});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
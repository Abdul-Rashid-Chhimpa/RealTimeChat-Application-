const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Store users
const users = {};

// Set EJS as the templating engine

app.set("view engine", 'ejs');
app.set("views", path.resolve("./views"));
app.use('/public', express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('roomJoin');
});

app.get('/chat', (req, res) => {
    const { username } = req.query;
    if (!username) {
        return res.redirect('/');
    }
    res.render('chat', { username });
});

// WebSocket connection
io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('join', (username) => {
        users[socket.id] = username;

        // Notify the user and others
        socket.emit('welcome', `Welcome dear , ${username}!`);
        socket.broadcast.emit('userJoined', `${username} has joined the chat.`);
        io.emit('updateUsers', Object.values(users));
    });

    socket.on('message', (msg) => {
        const username = users[socket.id];
        io.emit('message', { username, msg });
    });

    socket.on('disconnect', () => {
        const username = users[socket.id];
        delete users[socket.id];
        io.emit('userLeft', `${username} has left the chat.`);
        io.emit('updateUsers', Object.values(users));
    });
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
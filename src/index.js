const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);


app.use( express.static(path.join(__dirname, "views")) );


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


//evento cuando un cliente se conecta
io.on('connection', (socket) => {
    console.log("Clientes conectados", io.engine.clientsCount);
    console.log("Id del socket conectado", socket.id);

    //evento para detectar cuando un cliente se desconecta
    socket.on('disconnect', () => {
        console.log("Id del socket desconectado", socket.id);
    });

    //evento para detectar cuando se pasa de http a ws
    socket.conn.once("upgrade", () => {
        console.log("Http a ", socket.conn.transport.name);
    });
});


httpServer.listen(3000, () => {
    console.clear();
    console.log('Server is running on port 3000');
});
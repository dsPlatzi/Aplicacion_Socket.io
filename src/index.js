const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const socketOnline = [];


app.use( express.static(path.join(__dirname, "views")) );


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


//evento cuando un cliente se conecta
io.on('connection', (socket) => {

    //eventos disponibles en la libreria
    // console.log("Clientes conectados", io.engine.clientsCount);
    // console.log("Id del socket conectado", socket.id);

    // //evento para detectar cuando un cliente se desconecta
    // socket.on('disconnect', () => {
    //     console.log("Id del socket desconectado", socket.id);
    // });

    // //evento para detectar cuando se pasa de http a ws
    // socket.conn.once("upgrade", () => {
    //     console.log("Http a ", socket.conn.transport.name);
    // });

    //agregar el id del socket a un array
    // socketOnline.push(socket.id);

    // //emitir un evento al cliente
    // socket.emit("welcome", "Ahora estas conectado");

    // //emitir un evento a todos los clientes
    // io.emit("everyone", socket.id + " se ha conectado");


    // //dectectar eventos
    // socket.on("emit-to-server", (data) => {
    //     console.log(data);
    // });

    // socket.on("emit-to-last", (data) => {
    //     const lastSocket = socketOnline[socketOnline.length - 1];

    //     //emitir un evento a un cliente
    //     io.to(lastSocket).emit("saludo", data);
    // });


    // //on, once y off
    // socket.emit("on", "Este evento se ejecuta cada vez que se emite");
    // socket.emit("on", "Este evento se ejecuta cada vez que se emite");

    // socket.emit("once", "Este evento se ejecuta una sola vez");
    // socket.emit("once", "Este evento se ejecuta una sola vez");

    // socket.emit("off", "Este evento sirve para desactivar un evento");
    // setTimeout(() => {
    //     socket.emit("off", "Este evento sirve para desactivar un evento");
    // }, 3000);


    //broadcast
    socket.on("circle position", (position) => {
        socket.broadcast.emit("circle move", position);
    });
});


httpServer.listen(3000, () => {
    console.clear();
    console.log('Server is running on port 3000');
});
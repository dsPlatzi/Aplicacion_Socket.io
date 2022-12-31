const socket = io();


//eventos disponibles en la libreria  desde el lado del cliente
// const checkSocket = () => {
//     console.log("Estado del socket", socket.connected);
// };


// //eventos disponibles en la libreria
// socket.on('connect', () => {
//     console.log("Socket conectado", socket.id);
//     checkSocket();
// });

// socket.on("connect_error", (error) => {
//     console.log("Error al conectar", error);
// });

// socket.on('disconnect', () => {
//     console.log("Socket desconectado", socket.id);
// });


// //evento para detectar cuando un cliente se desconecta
// //eventos disponibles en el engine de socket.io
// socket.io.on("reconnect_attempt", () => {
//     console.log("Intentando reconectar");
// });

// socket.io.on("reconnect", () => {
//     console.log("Reconectado");
// });


//dectectar eventos
socket.on("welcome", (data) => {
    const etiqueta = document.getElementById("text");
    etiqueta.innerHTML = data;
    console.log(data);
});

socket.on("everyone", (data) => {
    console.log(data);
});


//emitir eventos
const emit = document.getElementById("emit-to-server");
emit.addEventListener("click", () => {
    socket.emit("emit-to-server", "Hola desde el cliente");
});
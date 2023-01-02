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
// socket.on("welcome", (data) => {
//     const etiqueta = document.getElementById("text");
//     etiqueta.innerHTML = data;
//     console.log(data);
// });

// socket.on("everyone", (data) => {
//     console.log(data);
// });

// socket.on("saludo", (data) => {
//     console.log(data);
// });


// //emitir eventos
// const emit = document.getElementById("emit-to-server");
// emit.addEventListener("click", () => {
//     socket.emit("emit-to-server", "Hola desde el cliente");
// });

// const emitLast = document.getElementById("emit-to-last");
// emitLast.addEventListener("click", () => {
//     socket.emit("emit-to-last", "Hola ultimo socket");
// });


// //on, once y off
// socket.on("on", (data) => {
//     console.log(data);
// });

// socket.once("once", (data) => {
//     console.log(data);
// });

// //desactivar un evento
// const listener = () => {
//     console.log("Este evento se desactivo");
// };

// socket.on("off", listener);

// setTimeout(() => {
//     socket.off("off", listener);
// }, 1500);


//broadcast
const circle = document.getElementById("circle");

const drawCircle = (position) => {
    circle.style.top = position.clientY;
    circle.style.left = position.clientX;
};

//funcion para mover el circulo
const drag = (e) => {
    const position = {
        clientX: e.clientX + "px",
        clientY: e.clientY + "px",
    };
    //mover el circulo solo para el cliente
    drawCircle(position);
    //mover el circulo para todos los clientes
    socket.emit("circle position", position);
};

//funcion para detectar cuando se presiona y mueve el mouse
document.addEventListener("mousedown", (e) => {
    document.addEventListener("mousemove", drag);
});

document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", drag);
});

//detectar eventos
socket.on("circle move", (position) => {
    drawCircle(position);
});
import jwt from "jsonwebtoken";

function autorizarUsuario(socket, next) {
    const tokenJWT = socket.handshake.auth.token;

    try {
        const payloadToken = jwt.verify(tokenJWT, process.env.SEGREDO_JWT);
        socket.emit("autorizado_com_sucesso", payloadToken);
        next();
    } catch(erro) {
        next(erro);
    }

    next();
}

export default autorizarUsuario;
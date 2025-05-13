const socket = io();

function emitirCadastrarUsuario(dadosParaCadastro) {
    socket.emit("cadastrar_usuario", dadosParaCadastro);
}

export { emitirCadastrarUsuario };
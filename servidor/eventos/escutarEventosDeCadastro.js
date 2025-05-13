function escutarEventosDeCadastro(socket, io) {
    socket.on("cadastrar_usuario", (dadosParaCadastro) => {
        console.log(dadosParaCadastro);
    });
}

export default escutarEventosDeCadastro;
const socket = io();

function emitirCadastrarUsuario(dadosParaCadastro) {
    socket.emit("cadastrar_usuario", dadosParaCadastro);
}

socket.on("cadastrado_com_sucesso", () => alert("Cadastro realizado com sucesso!"));
socket.on("erro_ao_cadastrar", () => alert("Um erro ocorreu durante o cadastro..."));
socket.on("usuario_ja_existe", () => alert("Esse usuário já existe!"));

export { emitirCadastrarUsuario };
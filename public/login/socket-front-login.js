import { definirCookie } from "../utils/cookie.js";

const socket = io();

function emitirAutenticarUsuario(dadosParaAutenticacao) {
    socket.emit("autenticar_usuario", dadosParaAutenticacao);
}

socket.on("autenticado_com_sucesso", (tokenJWT) => {
    definirCookie("tokenJWT", tokenJWT);

    alert("Usuário autenticado com sucesso!");

    window.location.href = "/";
});
socket.on("erro_ao_autenticar", () => alert("Falha na autenticação!"));
socket.on("usuario_nao_encontrado", () => alert("Usuário não encontrado!"));

export { emitirAutenticarUsuario };
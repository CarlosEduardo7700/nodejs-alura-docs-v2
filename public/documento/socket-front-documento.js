import { obterCookie } from "../utils/cookie.js";
import { alertarERedirecionar, atualizarInterfaceUsuarios, atualizaTextoEditor, tratarAutorizacaoSucesso } from "./documento.js";

const socket = io("/usuarios", {
  auth: {
    token: obterCookie("tokenJWT"),
  }
});

socket.on("autorizado_com_sucesso", tratarAutorizacaoSucesso)

socket.on("connect_error", (error) => {
  alert(error);
  window.location.href = "/login/index.html";
});

function selecionarDocumento(dadosDeEntrada) {
  socket.emit("selecionar_documento", dadosDeEntrada, (texto) => {
    atualizaTextoEditor(texto);
  });
}

socket.on("conexoes_no_documento", atualizarInterfaceUsuarios);

function emitirTextoEditor(dados) {
  socket.emit("texto_editor", dados);
}

socket.on("texto_editor_clientes", (texto) => {
  atualizaTextoEditor(texto);
});

function emitirExcluirDocumento(nome) {
  socket.emit("excluir_documento", nome);
}

socket.on("excluir_documento_sucesso", (nome) => {
  alertarERedirecionar(nome);
});

export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento };

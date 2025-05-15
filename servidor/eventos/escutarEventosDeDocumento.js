import {
  atualizaDocumento,
  encontrarDocumento,
  excluirDocumento,
} from "../db/documentosDb.js";
import { adicionarConexao, obterUsuariosNoDocumento, removerConexao } from "../utils/conexoesNosDocumentos.js";

function escutarEventosDeDocumento(socket, io) {
  socket.on("selecionar_documento", async ({ nomeDocumento, nomeUsuario }, devolverTexto) => {
    const documento = await encontrarDocumento(nomeDocumento);
    
    if (documento) {
      socket.join(nomeDocumento);

      adicionarConexao({ nomeDoDocumento: nomeDocumento, nomeDoUsuario: nomeUsuario });

      const usuariosNoDocumento = obterUsuariosNoDocumento(nomeDocumento);

      io.to(nomeDocumento).emit("conexoes_no_documento", usuariosNoDocumento);

      devolverTexto(documento.texto);
    }

    socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
      const atualizacao = await atualizaDocumento(nomeDocumento, texto);

      if (atualizacao.modifiedCount) {
        socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
      }
    });

    socket.on("excluir_documento", async (nome) => {
      const resultado = await excluirDocumento(nome);

      if (resultado.deletedCount) {
        io.emit("excluir_documento_sucesso", nome);
      }
    });

    socket.on("disconnect", () => {
      removerConexao(nomeDocumento, nomeUsuario);

      const usuariosNoDocumento = obterUsuariosNoDocumento(nomeDocumento);

      io.to(nomeDocumento).emit("conexoes_no_documento", usuariosNoDocumento);
    });
  });
}

export default escutarEventosDeDocumento;
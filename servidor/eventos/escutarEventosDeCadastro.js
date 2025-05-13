import { cadastrarUsuario, encontrarUsuario } from "../db/usuariosDb.js";

function escutarEventosDeCadastro(socket, io) {
    socket.on("cadastrar_usuario", async (dadosParaCadastro) => {
        const  usuario = await encontrarUsuario(dadosParaCadastro.usuario);

        if (usuario === null) {
            const resultado = await cadastrarUsuario(dadosParaCadastro);
    
            if (resultado.acknowledged) {
                socket.emit("cadastrado_com_sucesso");
            } else {
                socket.emit("erro_ao_cadastrar");
            }
        } else {
            socket.emit("usuario_ja_existe");
        }

    });
}

export default escutarEventosDeCadastro;
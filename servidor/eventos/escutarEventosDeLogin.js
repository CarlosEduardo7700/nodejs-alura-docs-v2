import { encontrarUsuario } from "../db/usuariosDb.js";
import autenticarUsuario from "../utils/autenticarUsuario.js";
import gerarTokenJWT from "../utils/gerarTokenJWT.js";

function escutarEventosDeLogin(socket, io) {
    socket.on("autenticar_usuario", async ({ usuario, senha }) => {
        const usuarioEncontrado = await encontrarUsuario(usuario);

        if (usuarioEncontrado) {
            const autenticado = autenticarUsuario(senha, usuarioEncontrado);
    
            if (autenticado) {
                const tokenJWT = gerarTokenJWT({ nomeDoUsuario: usuario });

                socket.emit("autenticado_com_sucesso", tokenJWT);
            } else {
                socket.emit("erro_ao_autenticar");
            }
        } else {
            socket.emit("usuario_nao_encontrado");
        }

    });
}

export default escutarEventosDeLogin;
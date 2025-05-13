import { usuariosColecao } from "./dbConnect.js";

function encontrarUsuario(usuario) {
    return usuariosColecao.findOne({ usuario });
}

function cadastrarUsuario({ usuario, senha }) {
    return usuariosColecao.insertOne({ usuario, senha });
}

export { cadastrarUsuario, encontrarUsuario };
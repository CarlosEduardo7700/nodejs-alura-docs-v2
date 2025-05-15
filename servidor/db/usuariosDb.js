import criaHashESalSenha from "../utils/criaHashESalSenha.js";
import { usuariosColecao } from "./dbConnect.js";

function encontrarUsuario(usuario) {
    return usuariosColecao.findOne({ usuario });
}

function cadastrarUsuario({ usuario, senha }) {
    const { hashSenha, salSenha } = criaHashESalSenha(senha);

    return usuariosColecao.insertOne({ usuario, hashSenha, salSenha });
}

export { cadastrarUsuario, encontrarUsuario };
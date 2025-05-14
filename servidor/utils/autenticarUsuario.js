import { scryptSync, timingSafeEqual } from "crypto";

function autenticarUsuario(senha, usuario) {
    const hashParaTeste = scryptSync(senha, usuario.salSenha, 64);

    const hashReal = Buffer.from(usuario.hashSenha, "hex");

    const autenticado = timingSafeEqual(hashParaTeste, hashReal);

    return autenticado;
}

export default autenticarUsuario;
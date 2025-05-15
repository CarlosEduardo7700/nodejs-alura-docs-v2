const conexoesNosDocumentos = [];

function adicionarConexao(conexao) {
    conexoesNosDocumentos.push(conexao);
}

function obterUsuariosNoDocumento(nomeDoDocumento) {
    return conexoesNosDocumentos
        .filter((conexao) => conexao.nomeDoDocumento === nomeDoDocumento)
        .map((conexao) => conexao.nomeDoUsuario);
}

function removerConexao(nomeDoDocumento, nomeDoUsuario) {
    const indice = conexoesNosDocumentos.findIndex((conexao) => {
        return conexao.nomeDoDocumento === nomeDoDocumento && conexao.nomeDoUsuario === nomeDoUsuario
    });

    if (indice !== -1) {
        conexoesNosDocumentos.splice(indice, 1);
    }
}

export { adicionarConexao, obterUsuariosNoDocumento, removerConexao };
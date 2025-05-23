import { MongoClient } from "mongodb";

const cliente = new MongoClient(
  "mongodb+srv://cadu0077:admin123@paraestudos.klgex.mongodb.net/?retryWrites=true&w=majority&appName=ParaEstudos"
);

let documentosColecao;
let usuariosColecao;

try {
  await cliente.connect();

  const db = cliente.db("alura-websockets");
  documentosColecao = db.collection("documentos");
  usuariosColecao = db.collection("usuarios");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao, usuariosColecao };

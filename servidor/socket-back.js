import "dotenv/config";

import io from "./servidor.js";
import escutarEventosDeHome from "./eventos/escutarEventosDeHome.js";
import escutarEventosDeDocumento from "./eventos/escutarEventosDeDocumento.js";
import escutarEventosDeCadastro from "./eventos/escutarEventosDeCadastro.js";
import escutarEventosDeLogin from "./eventos/escutarEventosDeLogin.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

const namespaceUsuario = io.of("/usuarios");

namespaceUsuario.use(autorizarUsuario);

namespaceUsuario.on("connection", (socket) => {
  escutarEventosDeHome(socket, namespaceUsuario);
  escutarEventosDeDocumento(socket, namespaceUsuario);
});

io.of("/").on("connection", (socket) => {
  escutarEventosDeCadastro(socket, io);
  escutarEventosDeLogin(socket, io);
});

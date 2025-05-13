import io from "./servidor.js";
import escutarEventosDeHome from "./eventos/escutarEventosDeHome.js";
import escutarEventosDeDocumento from "./eventos/escutarEventosDeDocumento.js";
import escutarEventosDeCadastro from "./eventos/escutarEventosDeCadastro.js";

io.on("connection", (socket) => {
  escutarEventosDeHome(socket, io);
  escutarEventosDeDocumento(socket, io);
  escutarEventosDeCadastro(socket, io);
});

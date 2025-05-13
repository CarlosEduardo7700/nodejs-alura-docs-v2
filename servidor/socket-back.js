import io from "./servidor.js";
import escutarEventosDeHome from "./registrarEventos/escutarEventosDeHome.js";
import escutarEventosDeDocumento from "./registrarEventos/escutarEventosDeDocumento.js";
import escutarEventosDeCadastro from "./registrarEventos/escutarEventosDeCadastro.js";

io.on("connection", (socket) => {
  escutarEventosDeHome(socket, io);
  escutarEventosDeDocumento(socket, io);
  escutarEventosDeCadastro(socket, io);
});

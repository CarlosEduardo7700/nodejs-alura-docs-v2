import io from "./servidor.js";
import escutarEventosDeHome from "./registrarEventos/escutarEventosDeHome.js";
import escutarEventosDeDocumento from "./registrarEventos/escutarEventosDeDocumento.js";

io.on("connection", (socket) => {
  escutarEventosDeHome(socket, io);
  escutarEventosDeDocumento(socket, io);
});

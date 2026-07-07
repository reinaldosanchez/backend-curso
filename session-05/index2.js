const { clientes, obtenerActivos } = require("./clientes");
const activos = obtenerActivos(clientes);
activos.forEach((activo) => {
  console.log(activo.nombre);
});

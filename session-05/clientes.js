const clientes = [
  { nombre: "reinaldo", ciudad: "valencia", activo: true },
  { nombre: "Stefanny", ciudad: "maracaibo", activo: false },
  { nombre: "Christy", ciudad: "San diego", activo: true },
  { nombre: "Eugenia", ciudad: "valencia", activo: true },
];
const obtenerActivos = (clientes) => {
  return clientes.filter((cliente) => cliente.activo === true);
};
module.exports = { clientes, obtenerActivos };

const productos = [
  { nombre: "Camiseta", precio: 20 },
  { nombre: "Pantalón", precio: 45 },
  { nombre: "Zapatos", precio: 80 },
  { nombre: "Gorra", precio: 15 },
];

const precios = productos.map((producto) => producto.precio);
const conDescuento = productos.map((producto) => {
  return {
    nombre: producto.nombre,
    precio: producto.precio * 0.9,
  };
});
console.log(precios);
console.log(conDescuento);

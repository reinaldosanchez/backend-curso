const materiales = [
  {
    nombre: "Vinil autoadhesivo",
    terminado: "Brillante",
    ancho: 152,
    disponible: true,
  },
  {
    nombre: "Vinil autoadhesivo",
    terminado: "Matte",
    ancho: 137,
    disponible: false,
  },
  {
    nombre: "Vinil autoadhesivo",
    terminado: "Brillante",
    ancho: 137,
    disponible: false,
  },
  {
    nombre: "Vinil autoadhesivo",
    terminado: "Brillante",
    ancho: 107,
    disponible: true,
  },
  {
    nombre: "Lona Banner 13oz",
    terminado: "Brillante",
    ancho: 185,
    disponible: true,
  },
  {
    nombre: "Lona Banner 13oz",
    terminado: "Brillante",
    ancho: 135,
    disponible: true,
  },
  {
    nombre: "Lona Banner 13oz",
    terminado: "Brillante",
    ancho: 160,
    disponible: true,
  },
];
const vinilMatte = materiales
  .filter(
    (material) =>
      material.disponible === true && material.terminado === "Brillante",
  )
  .map((material) => material.nombre);
console.log(vinilMatte);

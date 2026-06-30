const empleados = [
  {
    nombre: "Reinaldo",
    departamento: "Desarrollo",
    activo: true,
    salario: 1500,
  },
  { nombre: "Jose", departamento: "Desarrollo", activo: true, salario: 1200 },
  { nombre: "Fernando", departamento: "Ventas", activo: false, salario: 900 },
  { nombre: "Maria", departamento: "Ventas", activo: true, salario: 1100 },
];

const desarrolladores = empleados
  .filter(
    (empleado) =>
      empleado.departamento === "Desarrollo" && empleado.activo === true,
  )
  .map((empleado) => empleado.nombre);

console.log(desarrolladores);

const salariosActivos = empleados
  .filter((empleado) => empleado.activo === true)
  .map((empleado) => empleado.salario);

console.log(salariosActivos);

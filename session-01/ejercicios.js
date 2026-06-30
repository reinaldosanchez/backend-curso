const vehiculos = [
  { marca: "Toyota", año: 2018, operativo: true },
  { marca: "Ford", año: 2015, operativo: false },
  { marca: "Chevrolet", año: 2020, operativo: true },
  { marca: "Honda", año: 2019, operativo: false },
];

vehiculos.forEach((vehiculo) => {
  console.log(vehiculo.marca, vehiculo.año);
});

const operativos = vehiculos.filter((vehiculo) => vehiculo.operativo === true);

operativos.forEach((operativo) => {
  console.log(operativo.marca);
});

const carros = [
  { marca: "Ferrari", modelo: "Testarossa", servicio: true },
  { marca: "Mitsubishi", modelo: "Evo 10", servicio: true },
  { marca: "Subaru", modelo: "Impreza", servicio: false },
  { marca: "Ferrari", modelo: "Italia 458", servicio: false },
];

carros.forEach((carro) => {
  console.log(carro.marca, carro.modelo);
});

const conServicio = carros.filter((carro) => carro.servicio === true);

conServicio.forEach((servicio) => {
  console.log(servicio.marca);
});

const carros2 = [
  { modelo: "nissan gt-r34", ano: 1997, km: 200000, enciende: true },
  { modelo: "evo IX", ano: 2003, km: 210000, enciende: false },
  { modelo: "Dodge Challenger", ano: 1977, km: 900000, enciende: false },
  { modelo: "Datzun 240z", ano: 1999, km: 250000, enciende: true },
];

carros2.forEach((carro) => {
  console.log(carro.modelo, carro.ano, carro.km);
});

const siEnciende = carros2.filter((carro) => carro.enciende === true);

siEnciende.forEach((enciende) => {
  console.log(enciende.modelo, enciende.km);
});

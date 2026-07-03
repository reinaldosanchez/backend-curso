const esperar = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Esperé ${ms} milisegundos`);
    }, ms);
  });
};
//Ahora tu tarea: escribe una función async llamada ejecutar que use await para llamar a esperar(2000),
//guarde el resultado en una variable, y lo imprima con console.log. Luego llama a ejecutar() al final del archivo.
/*
const ejecutar = async () => {
  try {
    const resultado = await esperar(2000);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
};
console.log("Antes de ejecutar");
ejecutar();
console.log("Después de ejecutar");
*/
const procesarCliente = async () => {
  try {
    const [resultadoCliente, resultadoPedido] = await Promise.all([
      esperar(1000),
      esperar(500),
    ]);
    console.log(resultadoCliente, resultadoPedido);
  } catch (error) {
    console.log(error);
  }
};
procesarCliente();

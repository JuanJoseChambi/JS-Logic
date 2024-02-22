function Queue() {
    this.array = [];
  }
  
  Queue.prototype.enqueue = function(elemento) {
    return this.array.push(elemento);
  }
  
  Queue.prototype.dequeue = function() {
    return this.array.shift();
  }
  
  Queue.prototype.size = function() {
    return this.array.length;
  }

//   ---------------------------------------------

function henryParty(arr) {
    // Tu código aquí:
    let pasan = new Queue();
    for (let i = 0; i < arr.length; i++) {
        let pass = arr[i]
        if(pass.ticket === "VIP" && pass.estado === "Conocido")      
        pasan.enqueue(pass)
    }
    return pasan
}  
console.log(henryParty([{name:"Carol", ticket:"FALSO", estado: "Desconocido"},
{name:"Gonzalo", ticket:"VIP",estado: "Conocido"},
{Name: "Micaias", ticket:"VIP", estado: "Desconocido"}]));

const calcularImpuestos = (factura, i = 0, acc = 0) => {
// Tu código aquí:

}
  console.log(calcularImpuestos([],8,5));


  // - Si el año es 0 la cantidad de casas por año es de 0
// - Si el año es 1 la cantidad de casas por año es de 30
// - A partir del 2do año, se debe calcular con la siguiente formula: c(n-1) + c(n / n) => debe retornar 60
//
// EJEMPLOS:
// - casasPorAño(0) => 0
// - casasPorAño(1) => 30
// - casasPorAño(2) => 60
//
// REQUISITOS:
// 🟢 La función debe obtener la cantidad de casas por año de forma recursiva.
// 🟢 Si el valor de n recibido por parámetro es menor a 0, debe retornar false.
// 🟢 Si el valor de n recibido por parámetro es 1, debe retornar 30.

function casasPorAño(n) {
    if (n < 0) return false;
    if (n === 0) return 0;
    if (n === 1) return 30;
  
    return casasPorAño(n - 1) + casasPorAño(n / n);
  }
  console.log(casasPorAño(3));

  function construccionCasas(bolsas) {
    return function(casas){
      if(casas === 0)return "Por favor ingresar cuantas casas quieres construir";
      if(bolsas < 10)return "No se puede construir casas con esa cantidad de bolsas";
      let enteros = casas * 10
    if(bolsas < enteros)return "No se puede construir casas con esa cantidad de bolsas";
    if(bolsas > enteros)return `Solo puedes construir esta cantidad de casas: `+ casas;
    if(casas * bolsas === enteros)return true;



    }
}
let casas = construccionCasas(100)
  console.log(casas(1)); 
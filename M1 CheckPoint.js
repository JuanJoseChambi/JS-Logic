const { lstat } = require("fs");

const exp = require("constants");

function Queue() {
    this.array = [];
  }
  
  Queue.prototype.enqueue = function (elemento) {
    return this.array.push(elemento);
  };
  
  Queue.prototype.dequeue = function () {
    return this.array.shift();
  };
  
  Queue.prototype.size = function () {
    return this.array.length;
  };

// ¿Cómo saber quienes serán atendidos? La doctora del hospital solo atiende a las personas:
//  - Con una edad igual o mayor a 18 años. 
//  - Además su altura sea superior a 150 cm.
// Las personas que no cumplan con estos requisitos quedarán en espera.
function henryHospital(lista) {
    let Atendidas = new Queue()
    let EnEspera = new Queue()
    
      for (let i = 0; i < lista.length; i++) {
        let personas = lista[i]
        if(lista[i].edad >= 18 && lista[i].altura > 150){
          Atendidas.enqueue(personas)
        }else{
          EnEspera.enqueue(personas)
        } 
      }
      return {
        Atendidas: Atendidas,
        EnEspera: EnEspera,
      }
}

let yo = new Queue();
console.log(yo);
console.log(henryHospital([
    { nombre: 'Carol', edad: 24, altura: 146 },
    { nombre: 'Gonzalo', edad: 24, altura: 184 },
    { Nombre: 'Micaias', edad: 20, altura: 181 },
    { Nombre: 'Coraline', edad: 22, altura: 165 },
    { Nombre: 'Marcos', edad: 19, altura: 154 },
    { nombre: 'Mati', edad: 14, altura: 175 }
  ]));
// ----------------------------------------------------------------------------------------
function Stack() {
    this.array = [];
  }
  
  Stack.prototype.push = function (elemento) {
    this.array.push(elemento);
  };
  
  Stack.prototype.pop = function () {
    return this.array.pop();
  };
  
  Stack.prototype.size = function () {
    return this.array.length;
  };
//   ---------------------------------------------------------------------------------
function BuscandoError(expresion) {
let arrAux = [];    
 for (let i = 0; i < expresion.length; i++) {
   
 }return arrAux


}
  
console.log(BuscandoError("{[()()]}"));


// ---------------------------------------------

function contarPacientes(pacientes) {
let total = pacientes.length
if(pacientes.length > 0){
    return `La cantidad de pacientes en la planta son: ${total}`
}else{
    return "No hay pacientes en la planta"
}
}
  console.log(contarPacientes([]));
// ---------------------------------------------------------------------------------
function ordenarInstrumentos(instrumentos) {
  if(typeof instrumentos === "string"){
    return "Debe recibir un array de strings"
  }
  let cond = true
  while(cond){
    cond = false;
    for (let i = 0; i < instrumentos.length; i++) {
        palabra = instrumentos[i]
        if(instrumentos[i] > instrumentos[i+1]){
            let aux = palabra;
            instrumentos[i] = instrumentos[i+1];
            instrumentos[i+1] = aux;
            cond = true;
        }
      }
  }return instrumentos;
}
console.log(ordenarInstrumentos(['bisturí', 'espéculos', 'abrebocas', 'diapasones']));
// ------------------------------------------------------
// function numHabitaciones(pacientes, capacidad) {
//   if(capacidad === 0)return false;
//   if(pacientes === 0)return 0;
//   if(pacientes >= capacidad){
//     return 1 + numHabitaciones(pacientes - capacidad,capacidad)
//   }else{
//     return 1
//   }
// }
// console.log(numHabitaciones(35,5));
// -------------------------------------------------------------------------------------
function Node(valor) {
    this.value = valor;
    this.next = null;
  }
  
  function BinarySearchTree(valor) {
    this.value = valor;
    this.left = null;
    this.right = null;
  }
  
  BinarySearchTree.prototype.insert = function (value) {
    if (value < this.value) {
      if (this.left === null) this.left = new BinarySearchTree(value);
      else this.left.insert(value);
    } else {
      if (this.right === null) this.right = new BinarySearchTree(value);
      else this.right.insert(value);
    }
  };
  
  BinarySearchTree.prototype.insert2 = function (value) {
    if (value.id < this.value.id) {
      if (!this.left) this.left = new BinarySearchTree(value);
      else this.left.insert2(value);
    } else {
      if (!this.right) this.right = new BinarySearchTree(value);
      else this.right.insert2(value);
    }
  };
  
  BinarySearchTree.prototype.size = function () {
    if (this.value === null) {
      return 0;
    }
  
    if (this.left === null && this.right === null) {
      return 1;
    }
  
    if (this.left === null) {
      return 1 + this.right.size();
    }
  
    if (this.right === null) {
      return 1 + this.left.size();
    }
  
    return 1 + this.left.size() + this.right.size();
  };
  let nodos = new BinarySearchTree(10)
console.log(nodos);
nodos.insert({id:20,nombre: "hola",edad:50,especialidad:"doctor"})
console.log(nodos);

BinarySearchTree.prototype.buscandoAlDoctor = function (id) {
  // Tu código aquí:
  if(this.head === id){
    return this.head
  }
};
console.log(nodos.buscandoAlDoctor(45));
// ----------------------------------------------------------
function LinkedList() {
    this.head = null;
  }
  
  LinkedList.prototype.add = function (valor) {
    var nuevoNodo = new Node(valor);
  
    if (!this.head) {
      this.head = nuevoNodo;
    } else {
      var tailActual = this.head;
      while (tailActual.next !== null) {
        tailActual = tailActual.next;
      }
      tailActual.next = nuevoNodo;
    }
  };
  
  LinkedList.prototype.remove = function () {
    if (!this.head) {
      return undefined;
    }
  
    if (this.head.next === null) {
      var unicoNodo = this.head;
      this.head = null;
      return unicoNodo.value;
    }
  
    var nodoActual = this.head.next;
    var nodoPrevious = this.head;
    while (nodoActual.next !== null) {
      nodoPrevious = nodoActual;
      nodoActual = nodoActual.next;
    }
    nodoPrevious.next = null;
    return nodoActual.value;
  };
  
  LinkedList.prototype.search = function (arg) {
    var nodoActual = this.head;
  
    if (nodoActual === null) {
      return null;
    }
  
    while (nodoActual !== null) {
      if (typeof arg === "function") {
        if (arg(nodoActual.value)) {
          return nodoActual.value;
        }
      } else if (nodoActual.value === arg) {
        return nodoActual.value;
      }
      nodoActual = nodoActual.next;
    }
  
    return null;
  };
  
  function Node(valor) {
    this.value = valor;
    this.next = null;
  }



LinkedList.prototype.pacienteEnMayorEspera = function () {
    // Tu código aquí
    let current = this.head;
    while(this.head){
        if(current.valor){
            
        }
    }
  };


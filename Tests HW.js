
/*---------------------------------------------------- HomeWork 1 ----------------------------------------*/
// function BinarioADecimal(num) {
//     var num = num.toString().split("").reverse();
//     var sum = 2; 
//     var res = [];
//     for (let i = 0; i < num.length; i++) {
//        if(num[i] === "1"){
//         res.push(Math.pow(sum,[i]));
//        }
//     }
//     res = res.reduce((a,b) => a + b)
//     return parseInt(res);
// }
// console.log(BinarioADecimal("101011"));


// function DecimalABinario(num) {
//     let bin = [];
//     while(num >= 1){
//        let resta = Math.floor(num % 2);
//        bin.push(resta);
//        num = num / 2;
//     }
//     bin.reverse();
//     return bin.join("");
// }
// console.log(DecimalABinario(23));

// /*---------------------------------------------------- HomeWork 2 ----------------------------------------*/
// /*
// // ```javascript
// x = 1;
// var a = 5;
// var b = 10;
// var c = function (a, b, c) {
//    var x = 10;
//    console.log(x); //10
//    console.log(a);//8
//    var f = function (a, b, c) {
//       b = a;
//       console.log(b);//8
//       b = c;
//       var x = 5;
//    };
//    f(a, b, c);
//    console.log(b);//9
// };
// c(8, 9, 10);
// console.log(b);//10
// console.log(x);//1
// // ```

// // ```javascript
// console.log(bar);//undefined
// // console.log(baz); baz is not defined 
// foo();
// function foo() {
//    console.log('Hola!');//Hola!
// }
// var bar = 1;
// baz = 2;
// // ```

// // ```javascript
// var instructor = 'Tony';
// if (true) {
//    var instructor = 'Franco';
// }
// console.log(instructor);//Franco
// // ```

// // ```javascript
// var instructor = 'Tony';
// console.log(instructor);//Tony
// (function () {
//    if (true) {
//       var instructor = 'Franco';
//       console.log(instructor);//Franco
//    }
// })();
// console.log(instructor);//Tony
// // ```
// // ```javascript
// var instructor = 'Tony';
// let pm = 'Franco';
// if (true) {
//    var instructor = 'The Flash';
//    let pm = 'Reverse Flash';
//    console.log(instructor);//The flash
//    console.log(pm);//Reverse Flash
// }
// console.log(instructor);//Tony X
// console.log(pm);//Franco
// // ```

// // ```javascript
// console.log(6 / "3")//2
// console.log("2" * "3") //Nan
// console.log(4 + 5 + "px")//9px
// console.log("$" + 4 + 5)//$45
// console.log("4" - 2)//2
// console.log("4px" - 2)//NaN
// console.log(7 / 0)//0
// console.log({}[0])//undefined
// console.log(parseInt("09"))//09
// console.log(5 && 2)//5
// console.log(2 && 5)//2
// console.log(5 || 0)//5
// console.log(0 || 5)//5
// console.log([3]+[3]-[10])//NaN
// console.log(3>2>1)//True
// console.log([] == ![])//null
// // ```

// // ```javascript
// function test() {
//    console.log(a);//undefined
//    console.log(foo());//2

//    var a = 1;
//    function foo() {
//       return 2;
//    }
// }

// test();
// // ```

// // ```javascript
// var snack = 'Meow Mix';

// function getFood(food) {
//    if (food) {
//       var snack = 'Friskies';
//       return snack;
//    }
//    return snack;
// }

// console.log(getFood(false));
// // ```
// // ```javascript
// var fullname = 'Juan Perez';
// var obj = {
//    fullname: 'Natalia Nerea',
//    prop: {
//       fullname: 'Aurelio De Rosa',
//       getFullname: function () {
//          return this.fullname;
//       },
//    },
// };

// console.log(obj.prop.getFullname());//Natalia Nerea

// var test = obj.prop.getFullname;

// console.log(test());//[Object]
// // ```

// // ```javascript
// function printing() {
//    console.log(1);
//    setTimeout(function () {
//       console.log(2);
//    }, 1000);
//    setTimeout(function () {
//       console.log(3);
//    }, 0);
//    console.log(4);
// }

// printing();//1432
// // ```
// */
// /*---------------------------------------------------- HomeWork 3 ----------------------------------------*/

// function counter(){
//    contador = 1;
//    return function(){
//       return contador++;
//    }
//  }
// const nuevoContador = counter();
// console.log(nuevoContador())
// console.log(nuevoContador())
// console.log(nuevoContador())
// console.log(nuevoContador())

// // function cacheFunction(cb) {
// //    var obj = {}
// //    return function cache(arg){  
// //      if(obj.hasOwnProperty(arg)){
// //        return obj[arg];
// //      }else{
// //        var cache = cb(arg);
// //        obj[arg] = cache;
// //        return cache;
// //      }
     
// //    }
// // }

//  /*---------------------------------------------------- HomeWork 4 ----------------------------------------*/

//  function nFactorial(n){
//    if(n <= 1){
//       return n;
//    }else{
//      return n * nFactorial(n - 1);
//    }
//  }
//  console.log(nFactorial(5));

//  /* nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente,
// como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será
// el resultado de la suma del último elemento y el anterior.
// Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

// Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... */
//  function nFibonacci(n) {
//    if(n == 0 || n === 1){
//       return n;
//    }else{
//       return nFibonacci(n-1) + nFibonacci(n - 2)
//    }
//  }
//  console.log(nFibonacci(7));



 
//  function Queue(){
//    this.q = [];
//  }
//  Queue.prototype.enqueue = function(value){
//    return this.q.push(value);
//  }
//  Queue.prototype.dequeue = function(){
//    if(this.q === undefined){
//      return undefined;
//    }else{
//      return this.q.shift();
//    }
//  }
//  Queue.prototype.size = function(){
//    return this.q.length
//  }
 
// const fifo = new Queue();
// console.log(fifo.enqueue("hola"));
// console.log(fifo.enqueue("juan"));
// console.log(fifo.enqueue("ana"));
// console.log(fifo.size());
// console.log(fifo.dequeue());
// console.log(fifo.dequeue());
// console.log(fifo.dequeue());
// console.log(fifo.size());
// console.log(fifo.enqueue("mama"));
// console.log(fifo.size());

 /*---------------------------------------------------- HomeWork 5 ----------------------------------------*/

// function LinkedList() {
//   this.head = null;
// }

// function Node(value) {
//   this.value = value;
//   this.next = null;
// }
// LinkedList.prototype.add = function(value){
// let nodo = new Node(value);
// let current = this.head;
//    if(!current){
// 	   this.head = nodo;
// 	   return nodo
//    }
//    while(current.next){
// 	   current = current.next   
//    }
//    current.next = nodo
//    return 
// }
// LinkedList.prototype.remove = function(){
//    let current = this.head;
//    if(!this.head){
//       return null
//    }
//    if(!current.next){
//       this.head = null
//       return current.value
//    }
//    while(current.next.next){
//       current = current.next;
//    }
//    let deletee = current.next;
//    current.next = null
//    return deletee.value
// }
// LinkedList.prototype.search = function (value){
//    let current = this.head;
//    if(typeof value === "function"){
//       return true
//    }
//   while (current !== null) {
//       if (current.value === value) {
//         return current;
//       }
//     current = current.next;
//   }

//   return null;
// }

// let newLiss = new LinkedList();

// newLiss.add(1)
// newLiss.add("jose")
// newLiss.add("juan")
// newLiss.add(4)
// newLiss.add(5)
// newLiss.add("ana")

// console.log(newLiss.search(4));
// console.log(newLiss);
// console.log(newLiss);

// // -----------
// // 0 if !head
// console.log(newLiss)
// // 1 if !current
// newLiss.add("hola");

// console.log(newLiss.remove())

// console.log(newLiss)
// // 2 while .next.next = avanzador
// console.log(newLiss.remove())
// newLiss.add("1");
// newLiss.add("2");
// console.log(newLiss)
// // 3 del cur.nex = null - ret del.val
// newLiss.add("hola");
// newLiss.add("hola");

// console.log(newLiss)
// // ---------------------------------------------------------------------------------------
function HashTable(){
  this.buckets = [];
  this.numBuckets = 35;
}
HashTable.prototype.hash = function(key){
  if (typeof key !== "string"){
    throw TypeError("deberia ser un String")
  }
  let hash = key.split("").map(i => {return i.charCodeAt()}).reduce((a,b) => a+b) % this.numBuckets;
  return Number(hash)
}
HashTable.prototype.set = function(key,value){
  if (typeof key !== "string") {
    throw TypeError("deberia ser un String")
  }
  let index = this.hash(key);
  if(this.buckets[index] === undefined){
    this.buckets[index] = {};
    this.buckets[index][key] = value;
  }
  if(this.buckets[index][value] !== this.value){/************************************ */
    this.buckets.index.push(key,value);
  }
}
HashTable.prototype.get = function(key){
  if (typeof key !== "string") {
    throw TypeError("deberia ser un String")
  }
  let index = this.hash(key);
  if(this.buckets[index].hasOwnPropery(key)){
    return this.buckets[index][key](this.buckets[index][value])
  } 
}
HashTable.prototype.hasKey = function(key){
  if (typeof key !== "string") {
    throw TypeError("deberia ser un String")
  }
  let index = this.hash(key);
  if(this.buckets[index].hasOwnPropery(key)){
    return true
  }else{
    return false
  }  
}
lista = new HashTable();
console.log(lista.hash("Juan"));
console.log(lista.set("jose",1161000622));
console.log(lista.set("jose",1123233));
console.log(lista.set("reb",1123233));
console.log(lista);

 /*---------------------------------------------------- HomeWork 6 ----------------------------------------*/


 /*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol

  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según
      se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, 
      hará el recorrido "in-order" por defecto.

  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
// function BinarySearchTree(value) {
//   this.value = value;
//   this.der = null;
//   this.izq = null;
//   this.leng = 1;
// }
// BinarySearchTree.prototype.size = function(){
//   return this.leng;
// }
// BinarySearchTree.prototype.insert = function(value){
//   if(value === this.value){
//     return
//   }
//   if(value > this.value){
//     if(this.der === null){
//       this.der = new BinarySearchTree(value)
//     }else{
//       this.der.insert(value)
//     }
//   }
//   if(value < this.value){
//     if(this.izq === null){
//       this.izq = new BinarySearchTree(value)
//     }else{
//       this.izq.insert(value)
//     }
//   }
  
// }
// // - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
// BinarySearchTree.prototype.contains = function(value){
//   if(value === this.value){
//     return true;
//   }  
//   if(this.der !== null && value > this.value){
//     if(this.der.contains(value)){
//       return true;
//     }
//   }
//   if(this.izq !== null && value < this.value){
//     if(this.izq.contains(value)){
//       return true;
//     }
//   }
//   return false;
// }
// // - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según
// // se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, 
// // hará el recorrido "in-order" por defecto.
// BinarySearchTree.prototype.depthFirstForEach = function(orden){
//   let resultado = [];
//   if(orden === "post-order"){
//     if(this.izq){
//       this.izq.depthFirstForEach(orden)
//     }
//   }
//   if(orden === "pre-order"){

//   }
//   if(orden === "in-order" || orden == null){

//   }
// }
// arbol = new BinarySearchTree(20)
// console.log(arbol.insert(25));
// console.log(arbol.insert(15));
// console.log(arbol.insert(17));
// console.log(arbol.insert(21));
// console.log(arbol.insert(28));
// console.log(arbol.insert(50));
// console.log(arbol.insert(05));
// console.log(arbol.insert(000));
// console.log(arbol.insert(14));
// console.log(arbol.insert(45));
// console.log(arbol.insert(30));
// console.log(arbol.insert(001));
// console.log(arbol.insert(13));
// console.log(arbol.insert(35));
// console.log(arbol.insert(33));
// console.log(arbol.insert(31));
// console.log(arbol.insert(34));
// console.log(arbol.insert(12));
// console.log(arbol.insert(11));
// console.log(arbol.contains(11));

// console.log(arbol.size());
// console.log(arbol);

 /*---------------------------------------------------- HomeWork 7 ----------------------------------------*/

//  function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //pseudo codigo
  // comparar las posiciones de un array i con i + 1
  // Si i > i+1 inveritirlas (podriasmos utilizar una variable aux 😉)
  // continuo mi recorrido  i++
  // hasta el momento en que en todas las evaluaciones i+1 > i

//   var cond = true;
//   while(cond){
//     var cond = false;
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] > array[i+1]){
//           var aux = array[i];
//           array[i] = array[i+1];
//           array[i+1] = aux;
//           cond = true; 
//         } 
//     }
//   }return array;
// }
// console.log(bubbleSort([1 , 11 , 1 , 2 ,15 , 10 , 1 , 20]));

// function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
   //pseudo codigo
  // me quiero posicionar en el segundo valor i = 1 y lo comparo con el anterior j = i - 1
  // almaceno en mi cajita a i (variable auxiliar)
  // [9,2,5,11]
  //    i
  //  j
  // aux = 2
  //comparo si i < j invierto los elementos  aux = i
  // recorro marcadores
//  let cond = true
//   while(cond){
//     cond = false
//     for (let i = 1; i < array.length; i++) {
//       while(array[i] < array[i-1]){
//         let aux = array[i];
//         array[i] = array[i-1];
//         array[i-1] = aux
//         cond = true
//       }
//     }
//   }
//   return array;  
// }
// console.log(insertionSort([10, 1 , 11 , 30, 1 , 2 ,15 , 10 , 1 , 20]));

// function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
   // Pseudo codigo
  // selecciono a min = i
  // i = j+1   si j < i
  // min - j
  // avanzo ambos marcadores hasta que length  === 0
  // colocar mi valor min en la posicion i
//   let arr = [];
//   for (let i = 0; i < array.length; i++) {
//     let min = i;
//     for (let j = i+1; j < array.length -1; j++) {
//       if(array[j] < array[min]){
//         min = array[j];
//       }
//     }
//     if(array[i] !== array[]){

//     }
//   }return array
// }
// console.log(selectionSort([10, 1 , 11 , 30, 1 , 2 ,15 , 10 , 1 , 20]));


// function factorear(num) {
//   // Factorear el número recibido como parámetro y devolver en un array
//   // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
//   // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
//   // Tu código:
//   let factor = [1];
//   let divisor = 2;

//   let condicional = true
//   while(condicional){
//     condicional = false
//     if(num > 1){
//       if (num % divisor === 0) {
//         factor.push(divisor);
//         num = num / divisor;
//       }else{
//         divisor++
//       }
//       condicional = true;
//     }
//   }return factor
// }
// console.log(factorear(180));




// function quickSort(array) {
//   // Implementar el método conocido como quickSort para ordenar de menor a mayor
//   // el array recibido como parámetro
//   // Devolver el array ordenado resultante
//   // Tu código:
//   if(array.length === 0)return [];
//   if(array.length === 1)return array;
//   let izq = [];
//   let der = [];
//   let pivote = divisor(array);

//   for (let i = 0; i < array.length; i++) {
//     if(array[i] < pivote){
//       izq.push(array[i])
//     }
//     if(array[i] > pivote){
//       der.push(array[i])
//     }
//   }
//   let menor = [];
//   let mayor = [];
//   for (let i = 0; i < izq.length; i++) {
//     if(izq[i] < pivote){
//       menor.push(izq[i])
//     }
//   }
//   for (let i = 0; i < der.length; i++) {
//     if(der[i] > pivote){
//       mayor.push(der[i])
//     }
//   }
//   return quickSort(menor).concat(pivote, quickSort(mayor));
 
// }
// console.log(quickSort([30,20,15,2,89,20]));



// function divisor(array){
//   let med = Math.floor(array.length/ 2);
//   return array[med]
// }
// console.log(divisor([1,2,2,3,7,8,3]));



/*Suma de enteros: Escribe una función recursiva que sume los primeros n enteros positivos. Por ejemplo, 
si n es 5, la función debería devolver 1 + 2 + 3 + 4 + 5 = 15.*/
// function suma(n){
// if(n === 1 || n === 0){
//   return n;
// }else{
//   return n + suma(n-1)
// }
// }
// console.log(suma(5));
/*Potencia: Implementa una función recursiva que calcule la potencia de un número. Dados dos números
base y exponente, la función debe devolver base elevado a la exponente. Por ejemplo, si base es 2 y 
exponente es 3, la función debería devolver 2^3 = 8.*/
// function potencia (base,exponente){
//   if(base == -1) {
//     return 0;
//   }
// }
// console.log(potencia(2,3));





// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

// var countArray = function(array) {
//   // Tu código aca:

//   resultado = array.flat(Infinity).reduce((a,b) =>{return a + b})
//   return resultado;
// }
// console.log(countArray([1, [2, [3,4]], [5,6], 7]));

// function casasPorAño(n) {
//   if (n < 0) return false;
//   if (n === 0) return 0;
//   if (n === 1) return 30;

//   return casasPorAño(n - 1) + casasPorAño(1);
// }
// console.log(casasPorAño(5));

// function casasPorAño(n) {
//   if (n < 0) return false;
//   if (n === 0) return 0;
//   if (n === 1) return 30;

//   return casasPorAño(n - 1) + casasPorAño(n / n);
// }
// console.log(casasPorAño(5)); // Salida: 120
// console.log();

// si el numero es par lo combierte a numero bianrio y si no es lo vuelve a numero hexadecimal
// function laCajaDePandora(numero){
//   if (numero % 2 === 0) {
//       // let binarios = [];
//       // while(numero >= 1){
//       //     let bin = Math.floor(numero % 2);
//       //     binarios.unshift(bin)
//       //     numero = numero/2;
//       // }
//       // return binarios.join("")
//       return numero.toString(2)
//   }
//   if (numero % 2 === 1) {
//       // let hexa = [];
//       // while(numero >= 1){
//       //     let numHex = Math.floor(numero % 16)
//       //     if(numHex === 10)numHex = "A";
//       //     if(numHex === 11)numHex = "B";
//       //     if(numHex === 12)numHex = "C";
//       //     if(numHex === 13)numHex = "D";
//       //     if(numHex === 14)numHex = "E";
//       //     if(numHex === 15)numHex = "F";
//       //     hexa.unshift(numHex)
//       //     numero = numero / 16;
//       // }
//       // return hexa.join("")
//       return numero.toString(16)
//   }
// }
// console.log(laCajaDePandora(827));
// console.log(314 % 16);



function encode(string) {
  
  const stringArr = string.split("");
  let newString = []
  
for(let i = 0; i < stringArr.length; i++ ){
  
  
  switch (i) {
      case "a":
        newString.push("1");
        return
      case "e":
        newString.push("2");
        return
      case "i":
        newString.push("3");
        return
      case "o":
        newString.push("4");
        return
      case "u":
        newString.push("5");
        return
  }
  newString.push(i)
}  
  const stringEncode = newString.join("")
  return
}

console.log(encode("hello"));

function decode(string) {
  const stringArr = string.split("");
  let newString = []
  
for(let i = 0; i < stringArr.length; i++ ){
  
  
  switch (i) {
      case "1":
        newString.push("a");
        return
      case "2":
        newString.push("e");
        return
      case "3":
        newString.push("i");
        return
      case "4":
        newString.push("o");
        return
      case "5":
        newString.push("u");
        return
  }
  newString.push(i)
}  
  const stringEncode = newString.join("")
  return
}
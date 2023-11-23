// function sayHello(){
//     console.log("hello!")
// }
// sayHello()


function getDistance(speed, time) {
    let distance = speed * time;
    return distance;
   }
   let myDistance = getDistance(10, 5);
console.log(myDistance)

// Условные операторы

// let name = true;
// if(name) {
//     console.log("Aigul")
// }
// else {
//     console.log("Dinara")
// }
//
// let name = false;
// if(name) {
//     console.log("Aigul")
// }
// else {
//     console.log("Dinara")
// }


//логические операторы
// ИЛИ ||
//ИЛИ "||" находит первое истинное значение
// console.log( true || true );   // true
// console.log( false || true );  // true
// console.log( true || false );  // true
// console.log( false || false ); // false

// && (И)
//И «&&» находит первое ложное значение

// console.log( true && true );   // true
// console.log( false && true );  // false
// console.log( true && false );  // false
// console.log( false && false ); // false


//! (НЕ)
//Оператор принимает один аргумент и выполняет следующие действия:
//
// Сначала приводит аргумент к логическому типу true/false.
// Затем возвращает противоположное значение.

// console.log( !true ); // false
// console.log(!false)//true
// console.log( !0 ); // true
// console.log(!true)//false

let speedLimit = 55;

function amISpeeding(speed) {
    if (speed >= speedLimit) {
        console.log("Yes. You are speeding.")
    }
    else {
        console.log("No. You are not speeding. What's wrong with you?")
    }
}

amISpeeding(89)
amISpeeding(20) 
// 1. Sintaxis básica: variables, funciones, eventos
// var nombre = "Antony"
// var apellido = "Espinoza"
// console.log("Mi nombre es " + nombre + " " + apellido)
// console.log(`Mi nombre es ${nombre} ${apellido}`) // Plantillas de texto con backticks

// string: "Textos"
// number: 1
// boolean: true/false

// ==================================

// let ciudad = "Lima"
// ciudad = "Arequipa"
// console.log(ciudad)

// let pais

// if (true) {
//     pais = "Peru"
// }
// console.log(pais)

// ==================================

// const PI = 3.1416
// PI = 3.15
// console.log(PI) // Error: no se puede cambiar una constante

// const colores = ["rojo", "azul"]
// colores.push("verde")
// console.log(colores)

// colores = ["negro"] // Error

// - Funciones: Bloques de código reutilizable
// const saludar = (name) => {
//     console.log(name)
// }

// saludar("Antony")

// function saludar(name) {
//     console.log(name)
// }

// saludar("Antony")

// - Eventos: Responden a acciones del usuario (click, escribir, mover el mouse)

// ==================================

// 2. Evento onclick y alert()

// - onclick: se ejecuta cuando damos click aun elemento
// - alert(): muestra un mensaje emergente

const saludar = () => {
    alert("Hola desde la funcion")
}

// ==================================

// 3. Modificar el contenido con Javascript (DOM basico)
const cambiarTexto = () => {
    alert("Hola, este es un mensaje!")
    document.querySelector(".mensaje").innerHTML = "Texto cambiado con JS CLASS!"
    document.getElementById("mensaje").innerHTML = "Texto cambiado con JS ID!"
}

// - Aumenta el valor del contador
let numero = 0
const aumentar = () => {
    numero++
    document.getElementById("contador").innerHTML = numero
}

// ==================================

// - Ejercicio: Mostrar el dato estudiantes al contenido
const estudiantes = [
    {
        name: "Antony",
        age: 23,
        career: "Ingenieria de Sistemas",
    },
    {
        name: "Luis",
        age: 22,
        career: "Diseño Gráfico",
    },
    {
        name: "Maria",
        age: 21,
        career: "Administración",
    },
]

const tabla = document.getElementById("tabla-estudiantes")

estudiantes.forEach(est => {
    const fila = `
        <tr>
            <td>${est.name}</td>
            <td>${est.age}</td>
            <td>${est.career}</td>
        </tr>
    `
    tabla.innerHTML += fila
})

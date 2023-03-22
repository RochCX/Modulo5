const persona = new Persona("Armando", "Mocha");
//console.dir(persona)

const h1 = document.getElementById("h1Nombre");
h1.innerHTML = persona.nombrar();

const pNombre = document.getElementById("pNombre");

pNombre.innerHTML =  persona.nombrar();

const p1 = document.getElementById("p1");

p1.innerHTML =  persona.getNombre();

//uso JSON
//console.log(data)
//data.participantes.push(persona)
//console.log(data)

const persona1 = new Persona("Alan", "Brito Delgado")
data.participantes.push(persona1)
console.log(data)

let nom = "Armando"
//console.log(data.participantes.filter(element=>element.nombre==nom));

/////////////////////////////
//Crear Objeto Curso
const curso = new Curso(data.curso)
console.log(curso)

data.participantes.forEach(element=>{
    const persona1 = new Persona(element.nombre, element.apellido)
    curso.agregarPersona(persona1)
    //console.log(element)
})
console.log(data)
console.log(curso)
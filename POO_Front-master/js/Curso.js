function Curso (nombre){
    this.curso = nombre
    this.participantes = []
}

Curso.prototype.agregarPersona = function (obj){
    this.participantes.push(obj)
}

Curso.prototype.buscarNombre = function(valor){
    return data.participantes.filter(element=>element.nombre==valor)
}

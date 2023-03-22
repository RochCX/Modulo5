function Pacientes(nom, ape, edad, rut, diag){
    this.nombre = nom;
    this.apellido = ape;
    this. edad = edad;
    this.rut = rut;
    this.diagnostico = diag;

    this.getNombre = function(){
        return this.nombre;
    }
}

Pacientes.prototype.nombrar = function(){
    return this.nombre +'' + this.apellido;
}
// cambiar a singular las clases

Pacientes.prototype.setNombre = function(nombre){
    this.nombre = nombre;
}
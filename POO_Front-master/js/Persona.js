function Persona(nom, ape){
    this.nombre = nom;
    this.apellido = ape;

    this.getNombre = function(){
        return this.nombre;
    }
}

Persona.prototype.nombrar = function(){
    return this.nombre +" " + this.apellido;
}
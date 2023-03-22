function Consultorio(nombre) {
    this.consultorio = nombre;
    this.pacientes = [];
}

Consultorio.prototype.agregarPaciente = function (obj) {
    obj.id = this.pacientes.length;
    this.pacientes.push(obj);
}

Consultorio.prototype.buscarPaciente = function (valor) {
    return this.pacientes.filter(element => element.nombre === valor);
}

Consultorio.prototype.getPacientes = function () {
    return this.pacientes;
}
Consultorio.prototype.modPacientes = function (id, diagnostico) {
    this.pacientes[id].diagnostico = diagnostico;
    // let finder = this.pacientes.findIndex(element => element.id === este.id);
    // this.pacientes[finder] = este;
}
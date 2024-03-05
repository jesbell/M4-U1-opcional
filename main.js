// Función constructora Consultorio
function Consultorio(nombre, pacientes) {
    this.nombre = nombre;
    this.pacientes = pacientes;
}
  
// Función constructora Paciente
function Paciente(nombre, edad, rut, diagnostico) {
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
    this.diagnostico = diagnostico;
}

//Guarda los pacientes creados
var listarPacientes = [];

//Listar todos los pacientes
Consultorio.prototype.mostrarPacientes = function() {
    return listarPacientes;
};

//Buscar paciente por nombre
Consultorio.prototype.buscarPorNombre = function(nombre) {
    return this.pacientes.filter(paciente => paciente.nombre.toLowerCase() === nombre.toLowerCase());
};
  
// Crear pacientes
var paciente1 = new Paciente("Juan", 25, "12345678-9", "Dolor de cabeza");
var paciente2 = new Paciente("Ana", 30, "98765432-1", "Dolor de estómago");
var paciente3 = new Paciente("Pedro", 35, "12345678-9", "Dolor de espalda");

listarPacientes.push(paciente1, paciente2, paciente3);
  
// Crear consultorios y vincularlos con los pacientes
var consultorio2 = new Consultorio("Consultorio 2", [paciente2]);
var consultorio = new Consultorio("Consultorio 1", [paciente1, paciente3]);

// Mostrar todos los pacientes
console.log("LISTADO PACIENTES REGISTRADOS: ");
console.log(consultorio.mostrarPacientes());

// Buscar un paciente por nombre
console.log("BUSCAR PACIENTE POR NOMBRE (buscando Juan):");
console.log(consultorio.buscarPorNombre("Juan"));
import Profesor from "./AbstractProfesor";
import Alumno from "./Alumno";
import Materias from "./Materias";


export default class Gestor {
    nombre: string;
    alumnos: Alumno[];
    materias: Materias[];
    profesor: Profesor [];

    constructor(nombre: string, alumnos:Alumno [], materias: Materias [], profesor: Profesor) {
        this.nombre = nombre,
            this.alumnos = [],
            this.materias = [],
            this.profesor = []
    }

    agregarAlumnos(nombre: string, apellido: string,) {
        
            
        return this.alumnos
    }
}
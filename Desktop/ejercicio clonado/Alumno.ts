import Persona from "./interface";

 class Alumno implements Persona{
    nombre: string;
    apellido: string;
    dni: number;
    materiasCursadas: [];
    matricula: boolean;
    notaPorMateria: number;
    promedioGeneral: number;

    constructor({ nombre, apellido, dni, materiasCursadas, matricula, notaPorMateria, promedioGeneral }: { nombre: string; apellido: string; dni: number; materiasCursadas: []; matricula: boolean; notaPorMateria: number; promedioGeneral: number; }){
           this.nombre = nombre;
           this.apellido = apellido;
           this.dni = dni;
           this.materiasCursadas = [];
           this.matricula = matricula;
           this.notaPorMateria = notaPorMateria;
           this.promedioGeneral = promedioGeneral

    }   
}
export default Alumno;
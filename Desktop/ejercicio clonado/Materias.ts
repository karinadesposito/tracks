import Profesor from "./AbstractProfesor";

export default class Materias {
   nombre: string;
    profesor: Profesor;
    constructor(nombre: string,profesor: Profesor) {
        this.nombre = nombre,
        this.profesor = profesor        
    }
    
}
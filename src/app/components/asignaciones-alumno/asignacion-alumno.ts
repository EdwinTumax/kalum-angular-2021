import { Alumno } from "../alumnos/alumno";
import { Clase } from "../home/clase";

export class AsignacionAlumno {
    asignacionId: string;
    fechaAsignacion: string;
    alumno: Alumno;
    clase: Clase;
}

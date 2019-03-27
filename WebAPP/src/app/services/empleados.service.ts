import { Injectable } from "@angular/core";

@Injectable()
export class EmpleadosService{
    private empleados: Empleado[] =[
        {
            id_empleado: 1,
            nombre_empleado: "Isac",
            apellido_paterno: "Perez",
            apellido_materno: "Martinez",
            puesto: "Cajero"
        },
        {
            id_empleado: 2,
            nombre_empleado: "Petra",
            apellido_paterno: "Gomez",
            apellido_materno: "Ruiz",
            puesto: "Cajero"
        }
    ];

    getEmpleados(): Empleado[]{
        return this.empleados;
    }
}

interface Empleado{
    id_empleado: number,
    nombre_empleado: string,
    apellido_paterno: string,
    apellido_materno: string,
    puesto: string
}
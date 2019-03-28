import { Injectable } from "@angular/core";

@Injectable()
export class ProveedoresService{
    private proveedores:Proveedor[] = [
        {
            id_proveedor: 1,
            nombre: "Pedro",
            apellido_paterno: "Perez",
            apellido_materno: "Villa",
            empresa: "Multico",
            numero_telefonico: "4691234567",
            correo_electronico: "ppv@gmail.com"
        },
        {
            id_proveedor: 2,
            nombre: "Luis Antonio",
            apellido_paterno: "Arellano",
            apellido_materno: "Bravo",
            empresa: "NU3",
            numero_telefonico: "3521234567",
            correo_electronico: "laab@gmail.com"
        },
        {
            id_proveedor: 3,
            nombre: "Eliú Efraín",
            apellido_paterno: "Díaz",
            apellido_materno: "Bravo",
            empresa: "Consultorio",
            numero_telefonico: "3657654321",
            correo_electronico: "elioefra@gmail.com"
        },
        {
            id_proveedor: 4,
            nombre: "Ramiro",
            apellido_paterno: "Guzmán",
            apellido_materno: "Ramirez",
            empresa: "Mecanica",
            numero_telefonico: "4697654321",
            correo_electronico: "rgr@gmail.com"
        },
        {
            id_proveedor: 5,
            nombre: "Brian Williams",
            apellido_paterno: "Roblero",
            apellido_materno: "Reyes",
            empresa: "Davicos",
            numero_telefonico: "4699876543",
            correo_electronico: "elchamus@gmail.com"
        }
    ];


    constructor(){
        console.log("Servicio listo para usar en los proveedores");
        
    }

    public getProveedores(): any{
        return this.proveedores;
    }
}

interface Proveedor{
    id_proveedor: number,
    nombre: string,
    apellido_paterno: string,
    apellido_materno: string,
    empresa: string,
    numero_telefonico: string,
    correo_electronico: string
}
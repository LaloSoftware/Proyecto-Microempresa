import { Injectable } from "@angular/core";

@Injectable()
export class InfoService{
    private info: Info ={
        nombre: "Abarrotes Pénjamo",
        direccion: "Manuel doblado #15, zona centro",
        codigo_postal: "36900",
        rfc: "qwerasdfrgfd",
        nombre_patron: "José García Muñoz",
        tipo_negocio: "Abarrotera"
    };

    public obtenerDatos(): Info{
        return this.info;
    }
}

interface Info{
    nombre: string,
    direccion: string,
    codigo_postal: string,
    rfc: string,
    nombre_patron: string,
    tipo_negocio: string
}
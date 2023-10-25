import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona'; // Importa la interfaz Persona

@Injectable({
    providedIn: 'root',
})
export class PersonaService {
  private apiUrl = 'http://localhost:4200/personas'; // Reemplaza 'URL_DEL_SERVIDOR' con la URL de tu servidor

    constructor(private http: HttpClient) {}

    getPersonas(): Observable<Persona[]> {
        return this.http.get<Persona[]>(this.apiUrl);
    }

    private personas: Persona[] = [];

    guardarPersona(persona: Persona) {
        // Agrega la nueva persona a la lista
        this.personas.push(persona);
    }
    
    obtenerPersonas(): Persona[] {
        // Devuelve la lista de personas
        return this.personas;
    }

}

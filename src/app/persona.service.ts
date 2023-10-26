import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona'; // Importa la interfaz Persona

@Injectable({
    providedIn: 'root',
})
export class PersonaService {

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

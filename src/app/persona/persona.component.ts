import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  personas!: Persona[];

  mostrarFormulario = false;

  constructor(public personaService: PersonaService, private router: Router, private route: ActivatedRoute){
    this.personas = personaService.obtenerPersonas();
  }

  ngOnInit(): void {
      /*this.personaService.obtenerPersonas().subscribe((data: Persona[])=>{
        this.personas = data;
      });*/
      /*this.route.queryParams.subscribe((params) => {
        if (params['cc'] && params['name'] && params['apellido1'] && params['apellido2'] && params['edad'] && params['genero']) {
          this.personas.push({
            cc: params['cc'],
            name: params['name'],
            apellido1: params['apellido1'],
            apellido2: params['apellido2'],
            edad: params['edad'],
            genero: params['genero'],
          });
        }
      });*/
  }

  /*agregarPersona(){
    this.router.navigate(['/formulario']);
    
  }*/

  actualizarTabla(persona: Persona) {
    this.personas.push(persona);
  }

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

}

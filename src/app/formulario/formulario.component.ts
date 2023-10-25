import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../persona';
import { Router } from '@angular/router';
import { PersonaService } from '../persona.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  @Output() agregarPersona: EventEmitter<Persona> = new EventEmitter<Persona>(); 
  @Output() cancel = new EventEmitter<void>();
  
  openAlert: boolean = false;
  constructor(private fb: FormBuilder, private router: Router, private personaService: PersonaService){ }

  get cc(){
    return this.formUser.get('cc') as FormControl;
  }

  get name(){
    return this.formUser.get('name') as FormControl;
  }

  get apellido1(){
    return this.formUser.get('apellido1') as FormControl;
  }

  get apellido2(){
    return this.formUser.get('apellido2') as FormControl;
  }

  get edad(){
    return this.formUser.get('edad') as FormControl;
  }

  get genero(){
    return this.formUser.get('genero') as FormControl;
  }

  formUser = this.fb.group({
    'cc' : [null, [Validators.required, Validators.pattern(/^\d+$/)]],
    'name' : [null, Validators.required],
    'apellido1' : [null, Validators.required],
    'apellido2' : [null, Validators.required],
    'edad' : [null, [Validators.required, Validators.pattern(/^\d+$/)]],
    'genero' : [null, Validators.required]
  });
  
  procesar(){
    console.log(this.formUser.value);
    this.openAlert=true;
  }

  guardar(){
    const formData = this.formUser.value;

    const cc = formData.cc != null ? formData.cc : 0; // Valor predeterminado: 0
    const name = formData.name || ''; // Valor predeterminado: cadena vacía
    const apellido1 = formData.apellido1 || ''; // Valor predeterminado: cadena vacía
    const apellido2 = formData.apellido2 || ''; // Valor predeterminado: cadena vacía
    const edad = formData.edad != null ? formData.edad : 0; // Valor predeterminado: 0
    const genero = formData.genero || '';

    // Crea un objeto Persona a partir de los datos del formulario
    const nuevaPersona: Persona = {
      cc: cc,
      name: name,
      apellido1: apellido1,
      apellido2: apellido2,
      edad: edad,
      genero: genero,
    };

    // Llama al servicio para guardar la nueva persona
    this.personaService.guardarPersona(nuevaPersona);

    this.router.navigate(['/persona'], { queryParams: this.formUser.value });
  }

  cancelar(){
    this.router.navigate(['/persona']);
  }
}

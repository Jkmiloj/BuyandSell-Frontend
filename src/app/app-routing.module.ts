import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {path: '', redirectTo: '/persona', pathMatch: 'full'},
  {component: PersonaComponent, path: 'persona'},
  {component: FormularioComponent, path: 'formulario'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

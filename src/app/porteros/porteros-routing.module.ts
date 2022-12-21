import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorterosComponent } from './porteros/porteros.component';
import { FormPorteroComponent } from './form-portero/form-portero.component';

const routes: Routes = [
  {
    path:'porteros', component: PorterosComponent
  },
  {
    path: 'porteros/edit/:idPortero', component:FormPorteroComponent
  },
  {
    path: '**', redirectTo:'porteros', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PorterosRoutingModule { }

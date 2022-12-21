import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component : HomeComponent
  },
  {
    path: 'porteros', loadChildren:() => import('./porteros/porteros.module').then(m=>m.PorterosModule)
  },
  {
    path: '**', redirectTo:'/', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

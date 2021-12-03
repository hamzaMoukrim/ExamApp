import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './machines/formulaire/formulaire.component';
import { MachinesComponent } from './machines/machines/machines.component';
import { UpdateComponent } from './machines/update/update.component';


const routes: Routes = [

  {path:'', component:MachinesComponent},
  {path:'add', component:FormulaireComponent},
  {path:'update/:id', component:UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

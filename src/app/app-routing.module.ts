import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPaysComponent } from './add-pays/add-pays.component';
import { PaysComponent } from './pays/pays.component';
import { RechercheParLangueComponent } from './recherche-par-langue/recherche-par-langue.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdatePaysComponent } from './update-pays/update-pays.component';

const routes: Routes = [
  {path : "pays", component : PaysComponent},
  {path : "add-pays", component : AddPaysComponent},
  {path : "updatePays/:id", component: UpdatePaysComponent},
  {path : "rechercheParLangue", component : RechercheParLangueComponent},
  {path : "rechercheParNom", component : RechercheParNomComponent},
  {path : "", redirectTo : "pays", pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

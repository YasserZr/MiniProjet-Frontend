import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPaysComponent } from './add-pays/add-pays.component';
import { PaysComponent } from './pays/pays.component';
import { FormsModule } from '@angular/forms';
import { UpdatePaysComponent } from './update-pays/update-pays.component';
import {HttpClientModule } from '@angular/common/http';
import { RechercheParLangueComponent } from './recherche-par-langue/recherche-par-langue.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe'
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    PaysComponent,
    AddPaysComponent,
    UpdatePaysComponent,
    RechercheParLangueComponent,
    RechercheParNomComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

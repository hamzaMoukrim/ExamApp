import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MachinesComponent } from './machines/machines/machines.component';
import { CardMachineComponent } from './machines/card-machine/card-machine/card-machine.component';
import { MachineService } from './service/machine.service';
import { FormulaireComponent } from './machines/formulaire/formulaire.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateComponent } from './machines/update/update.component';



@NgModule({
  
  declarations: [
    AppComponent,
    MachinesComponent,
    CardMachineComponent,
    FormulaireComponent,
    NavbarComponent,
    UpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule
  ],
  
  providers: [MachineService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // Agrega esta línea

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component'; // Asegúrate de que la ruta sea correcta

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // Agrega ReactiveFormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


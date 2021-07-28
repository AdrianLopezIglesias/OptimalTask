import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './card/main/main.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './card/main/form/form.component';

import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { TasksService } from './services/tasks.service';
import { SliderAvanceStatusComponent } from './card/slider-avance-status/slider-avance-status.component';
import { ModalEditarAvanceComponent } from './card/modal-editar-avance/modal-editar-avance.component';
import { SubtareasComponent } from './card/subtareas/subtareas.component';
import { DropdownComponent } from './card/main/dropdown/dropdown.component';

// import { ModalAsignarComponent } from './card/modal-asignar/modal-asignar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    SliderAvanceStatusComponent,
    ModalEditarAvanceComponent,
    SubtareasComponent,
    // ModalAsignarComponent,
    FormComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbDropdownModule
  ],
  providers: [
    TasksService
  ],
  entryComponents: [
    ModalEditarAvanceComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

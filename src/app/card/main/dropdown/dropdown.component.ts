import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `
    <div class="dropdown" ngbDropdown>
    <button
      class="btn btn-outline-secondary btn-sm dropdown-toggle"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      ngbDropdownToggle
    >
      Opciones
    </button>
    <ul
      class="dropdown-menu"
      ngbDropdownMenu
      aria-labelledby="dropdownMenuButton1"
    >
      <li><a class="dropdown-item" routerLink="/">Go Home</a></li>
      <li><a class="dropdown-item" (click)="open()">Asignar</a></li>
      <li>
        <a class="dropdown-item" (click)="openAvance()"
          >Editar Avance</a
        >
      </li>
      <li>
        <a class="dropdown-item" (click)="delete()">Eliminar tarea</a>
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor() { }


  @Output() openX = new EventEmitter();
  @Output() openAvanceX = new EventEmitter();
  @Output() deleteX = new EventEmitter();


  ngOnInit(): void {
  }


  open(){
    this.openX.emit();
  }
  openAvance(){
    this.openAvanceX.emit();
  }
  delete(){
    this.deleteX.emit();
  }
}

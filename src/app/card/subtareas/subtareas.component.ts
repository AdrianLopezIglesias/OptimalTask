import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'subtareas',
  template: `
  <p>Sub-tareas</p>
  <div class="d-grid gap-2">
    <div *ngFor="let child of childs" class="w-100">
      <a class="btn btn-outline-secondary w-100 btn-sm" 
        routerLink="/task/{{ child.id }}">
        {{ child.name }}     
        <app-slider-avance-status [task]="child"></app-slider-avance-status>
      </a>
    </div>
    <a class="btn btn-outline-secondary btn-sm" 
      (click)="newChild(task.id)">
      Nueva tarea
    </a>
  `,
  // templateUrl: './subtareas.component.html',
  styleUrls: ['./subtareas.component.css']
})
export class SubtareasComponent implements OnInit {

  constructor() { }

  @Output() change = new EventEmitter();
  @Input() childs;
  @Input() task;
  
  ngOnInit(): void {
  }

  newChild(e){
    this.change.emit(e);
  }

}

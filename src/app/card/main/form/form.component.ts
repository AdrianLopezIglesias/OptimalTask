import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'card-form',
  template: `
  <form class="mt-2">
    <input type="hidden" name="taskId" value="{{ taskId }}">
    <p>
      <input 
        class="form-control" 
        type="text" 
        placeholder="Task name" 
        name="taskName" 
        (keyup)="save(task.id)"
        [(ngModel)]="task.name" 
        value="{{ task.name }}">
    </p>

    <textarea 
      class="form-control" 
      placeholder="Descripción" 
      rows="6" 
      name="taskDescription" 
      (keyup)="save(task.id)"
      [(ngModel)]="task.description">
      {{ task.description }}
    </textarea>

    <label 
      for="customRange2" 
      class="form-label">
      Avance 
      ({{ task.avance.slider.currentValue }}/{{ task.avance.slider.maxValue }})
    </label>

    <input 
      type="range" 
      class="form-range" 
      min="0" 
      max="{{ task.avance.slider.maxValue }}" id="customRange2" 
      (change)="save(task.id)" 
      [(ngModel)]="task.avance.slider.currentValue" 
      name="avance" 
      value="{{ task.avance.slider.currentValue }}">
      
  </form>
  `,
  // templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  @Input() task: Task;
  @Input() taskId: string;
  @Output() change = new EventEmitter();


  ngOnInit(): void {
  }


  save(e){
    this.change.emit(e);
  }

}

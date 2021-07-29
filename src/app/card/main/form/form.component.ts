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




    <card-form-avance-main
      [task]="task"
    
    ></card-form-avance-main>


      
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

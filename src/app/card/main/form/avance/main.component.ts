import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Task, Avance } from '../../../task';

@Component({
  selector: 'card-form-avance-main',
  template: `
  <div [ngSwitch]="task.avance.type">
    <div *ngSwitchCase="'slider'">
      <label 
        for="avanceSelectSlider" 
        class="form-label">
        Avance 
        ({{ task.avance.slider.currentValue }}/{{ task.avance.slider.maxValue }})
      </label>
      <p>
        <input 
          id="avanceSelectSlider"
          type="range" 
          class="form-range" 
          min="0" 
          max="{{ task.avance.slider.maxValue }}" id="customRange2" 
          (change)="save(task.id)" 
          [(ngModel)]="task.avance.slider.currentValue" 
          name="avance" 
          value="{{ task.avance.slider.currentValue }}"
        > 
      </p>

    </div>


    <div *ngSwitchCase="'status'">
      <p>
      <label 
        for="avanceSelectStatus" 
        class="form-label">
        Avance 
      </label>
      <select
          id="avanceSelectStatus"
          class="form-select form-control"
          (change)="save(task.id)" 
          [(ngModel)]="task.avance.status.currentStatus" 
          name="avance" 
          value="{{ task.avance.status.currentStatus }}">
          aria-label="Default select example"
        >
          <option 
            *ngFor="let type of possibleStatus" 
            value="{{ type }}">
            {{ type }}
          </option>
        </select>
      </p>

    </div>

  </div>
  `
})
export class CardFormAvanceMainComponent implements OnInit {

  constructor() { }

  @Input() task: Task;
  @Input() taskId: string;
  @Output() change = new EventEmitter();


  ngOnInit(): void {
    console.log("this works");
  }

  possibleStatus = Avance.possibleStatus;

  save(){
    this.change.emit();
  }

}

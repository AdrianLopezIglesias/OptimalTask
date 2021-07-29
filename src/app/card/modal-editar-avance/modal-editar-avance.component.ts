import { Component, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TasksService } from 'src/app/services/tasks.service';
import { Avance, Task } from '../task';

@Component({
  selector: 'app-modal-editar-avance',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="editarAvance">Editar opciones de Avance</h4>
      <button type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form>
        <select
          class="form-select"
          [(ngModel)]="task.avance.type"
          name="selectedType"
          (change)="setAvanceType()"
        >
          <option 
            *ngFor="let type of avanceType" 
            value="{{ type }}">
            {{ type }}
          </option>
        </select>
      </form>
    </div>
  `,

  // templateUrl: './modal-editar-avance.component.html',
  styleUrls: ['./modal-editar-avance.component.css'],
})
export class ModalEditarAvanceComponent implements OnInit {
  @Input() task: Task;

  constructor(private modalService: NgbModal, private taskService: TasksService) {}

  avanceType = Avance.types;
  selectedType: string;

  ngOnInit(): void {
  }

  openAvance(content) {
    this.modalService.open(content, { ariaLabelledBy: 'asignarPadre' });
  }

  setAvanceType() {
    this.taskService.save(this.task);
    console.log(this.task);  
  }

  log() {
    console.log(this.selectedType);
  }
}

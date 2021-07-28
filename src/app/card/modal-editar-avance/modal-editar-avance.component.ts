import { Component, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Avance, Task} from '../task'

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
      [(ngModel)]="selectedType"
      name="selectedType"
      (change)="log()"
      aria-label="Default select example"
    >
      <option *ngFor="let type of avanceType" value="{{ type }}">
        {{ type }}
      </option>
    </select>
  </form>
</div>

`,

  // templateUrl: './modal-editar-avance.component.html',
  styleUrls: ['./modal-editar-avance.component.css']
})
export class ModalEditarAvanceComponent implements OnInit {

  @Input() task: Task;
  @Output() taskF: Task;

  constructor(
    private modalService: NgbModal
  ) { }

  avanceType = Avance.types;
  selectedType: string;

  ngOnInit(): void {
    this.selectedType = 'slider';
  }

  openAvance(content) {
    this.modalService.open(content, {ariaLabelledBy: 'asignarPadre'});
  }

  setAvanceType(){
  
  }

  log(){
    console.log(this.selectedType);
  }
}

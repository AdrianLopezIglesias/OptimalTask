import { Component, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Avance, Task} from '../task'

@Component({
  selector: 'app-modal-editar-avance',
  templateUrl: './modal-editar-avance.component.html',
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

import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Avance} from '../task'

@Component({
  selector: 'app-modal-editar-avance',
  templateUrl: './modal-editar-avance.component.html',
  styleUrls: ['./modal-editar-avance.component.css']
})
export class ModalEditarAvanceComponent implements OnInit {
  @Input() texto: string;
  constructor(
    private modalService: NgbModal
  ) { }
  avanceType = Avance.types;
  selectedType: string;
  ngOnInit(): void {
  }
  openAvance(content) {
    this.modalService.open(content, {ariaLabelledBy: 'asignarPadre'});
  }
  log(){
    console.log(this.selectedType);
  }
}

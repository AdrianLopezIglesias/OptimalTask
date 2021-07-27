import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-editar-avance',
  templateUrl: './modal-editar-avance.component.html',
  styleUrls: ['./modal-editar-avance.component.css']
})
export class ModalEditarAvanceComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }
  openAvance(content) {
    this.modalService.open(content, {ariaLabelledBy: 'asignarPadre'});
  }
}

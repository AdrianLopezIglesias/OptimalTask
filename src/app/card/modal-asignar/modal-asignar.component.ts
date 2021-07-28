import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../task';

@Component({
  selector: 'app-modal-asignar',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="asignarPadre">
        Asignar padre a: {{ task.name }}
      </h4>
      <button
        type="button"
        class="close"
        aria-label="Close"
        (click)="modal.dismiss('Cross click')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form>
        <div class="form-group">
          <label for="Búsqueda">Buscar</label>
          <div class="input-group">
            <input id="Búsqueda" class="form-control" />
          </div>
        </div>
      </form>
      <div class="d-grid gap-2">
        <div *ngFor="let par of posibleParents" class="w-100">
          <a class="btn btn-secondary w-100" (click)="asignar(par.id)">{{
            par.name
          }}</a>
        </div>
      </div>
    </div>
  `
})
export class ModalAsignarComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}
}

@Input() task: Task;

  task: Task;
  posibleParents: [];
  
// asignar(id: never){
//   this.task = this.t.adoptar(id, this.task);
//   this.modalService.dismissAll();
//   console.log(this.task);
//   this.fatherName = this.t.findByFather(this.task.father).name;
//   return this.router.navigate(['/task/'+this.task.id]);
// }

// open(content) {
//   this.modalService.open(content, {ariaLabelledBy: 'asignarPadre'}).result.then((result) => {
//     this.closeResult = `Closed with: ${result}`;
//   }, (reason) => {
//     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//   });
// }

// private getDismissReason(reason: any): string {
//   if (reason === ModalDismissReasons.ESC) {
//     return 'by pressing ESC';
//   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//     return 'by clicking on a backdrop';
//   } else {
//     return `with: ${reason}`;
//   }
// }

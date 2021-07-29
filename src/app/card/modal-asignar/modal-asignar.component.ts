import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../task';
import { Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-modal-asignar',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="asignarPadre">
        Asignar padre a: {{ task.name }}
      </h4>
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
  `,
})
export class ModalAsignarComponent implements OnInit {
  @Input() task: Task;
  @Input() posibleParents: [];

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private t: TasksService
    ) {}

  ngOnInit(): void {}


  asignar(id ){


// asignar(id: never){
  this.task = this.t.adoptar(id as never, this.task);
  this.modalService.dismissAll();
//   console.log(this.task);
  // this.fatherName = this.t.findByFather(this.task.father).name;
  return this.router.navigate(['/task/'+this.task.id]);
}
}
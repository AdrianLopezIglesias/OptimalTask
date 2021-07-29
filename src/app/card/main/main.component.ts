import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../task';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEditarAvanceComponent } from '../modal-editar-avance/modal-editar-avance.component';
import { ModalAsignarComponent } from '../modal-asignar/modal-asignar.component';

@Component({
  selector: 'card-main',
  template: `
    <div class="row mt-2">
      <div class="col-8">
        <a
          class="btn btn-outline-secondary w-100 btn-sm"
          *ngIf="!task.father"
          routerLink=""
          >Home</a
        >
        <a
          class="btn btn-outline-secondary w-100 btn-sm"
          *ngIf="task.father"
          routerLink="/task/{{ task.father }}"
        >
          {{ fatherName }}
        </a>
      </div>
      <div class="col-4">
        <div class="float-end">

          <app-dropdown
            (openAvanceX)="openAvance()"
            (openX)="open()"
            (deleteX)="delete()"
          ></app-dropdown>

        </div>
      </div>
    </div>

    <card-form
      [taskId]="taskId"
      [task]="task"
      (change)="save()"
    ></card-form>

    <subtareas 
      (change)="newChild($event)" 
      [childs]="childs" 
      [task]="task">
    </subtareas>
  `,
  // templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private t: TasksService,
    private modalService: NgbModal,

  ) {}

  closeResult = '';
  taskId: any;
  task: Task;
  father: string;
  fatherName = '';
  childs = [];
  posibleParents = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((x) => {
      this.taskId = x.get('id');

      this.task = this.t.get(this.taskId);
      this.childs = this.t.filteredIndex(this.taskId);
      if (this.task.father) {
        this.fatherName = this.t.findByFather(this.task.father).name;
      }
      this.posibleParents = this.t.posibleParentsIndex(this.task.id);
    });
  }

  ngDoCheck(): void {
      if (this.task.father) {
        this.fatherName = this.t.findByFather(this.task.father).name;
      }
  }

  save() {
    this.t.save(this.task);
  }

  sumbit(form) {
    console.log(form);
  }

  log(text) {
    console.log(text);
  }

  delete() {
    if (confirm('¿Seguro que desea eliminar esta tarea?')) {
      this.t.delete(this.taskId);
      this.router.navigate(['/']);
    }
  }

  newChild(father) {
    const newTask = this.t.new(father);
    this.router.navigate(['/task/' + newTask.id]);
  }

  // asignar(id: never) {
  //   this.task = this.t.adoptar(id, this.task);
  //   this.modalService.dismissAll();
  //   console.log(this.task);
  //   this.fatherName = this.t.findByFather(this.task.father).name;
  //   return this.router.navigate(['/task/' + this.task.id]);
  // }

  open() {
    let modal = this.modalService.open(ModalAsignarComponent);
    modal.componentInstance.task = this.task;
    modal.componentInstance.posibleParents = this.posibleParents;
  }


  openAvance() {
    const modal = this.modalService.open(ModalEditarAvanceComponent);
    modal.componentInstance.task = this.task;
  }

  refreshAvance(event: any) {
    console.log(event.target.value);
    console.log(this.task);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../task';


import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'card-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private t: TasksService,
    private modalService: NgbModal
  ) {
  }
  closeResult = '';
  taskId: any; 
  task: Task;
  father: string; 
  fatherName ="";
  childs = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(x => {
      this.taskId = x.get('id');

      this.task = this.t.get(this.taskId);
      this.childs = this.t.filteredIndex(this.taskId);
      if(this.task.father){
        this.fatherName = this.t.findByFather(this.task.father).name;
      }
    })
  }

  save(){
    this.t.save(this.task); 
  }

  sumbit(form){
    console.log(form)
  }

  log(task){
    console.log(task)
  }

  delete(){
    if(confirm('¿Seguro que desea eliminar esta tarea?')){
      
      this.t.delete(this.taskId);
      
      this.router.navigate(['/']);
    }
  }

  newChild(father){
    const newTask = this.t.new(father);
    this.router.navigate(['/task/'+newTask.id]);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

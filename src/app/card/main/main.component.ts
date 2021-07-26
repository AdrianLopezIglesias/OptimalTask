import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../task';
import { Observable } from 'rxjs';
import { combineLatest } from 'rxjs/index';
@Component({
  selector: 'card-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private t: TasksService
  ) {
  }
  
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



}

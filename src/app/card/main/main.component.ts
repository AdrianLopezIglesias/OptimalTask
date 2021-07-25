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
  childs = this.t.filteredIndex(this.taskId);

  ngOnInit(): void {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe(combined => {
        this.taskId = combined[0].get('id');
        this.father = combined[1].get('father');

        if(this.taskId == "new"){
          this.task = this.t.new(this.father);
        }else{
          this.task = this.t.get(this.taskId);
        }
    });
    
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


}

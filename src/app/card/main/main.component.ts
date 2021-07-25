import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {getUniqueId} from '../../helpers/idGenerator';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../task';
import {AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'card-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private t: TasksService
  ) {
  }
  
  taskId: any; 
  task: Task;

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.taskId = +params.get('id');
        if(this.taskId != "new"){
          this.task = this.t.get(this.taskId);
        }else{
          this.task = new Task(getUniqueId(1), "", "", 0, 0 ); 
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


}

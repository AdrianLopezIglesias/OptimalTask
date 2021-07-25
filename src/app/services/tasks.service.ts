import { Injectable } from '@angular/core';
import { Task } from '../card/task'


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
  ) { }
  
  tasks = []; 
  task = new Task("1", 'Mi primer tarea', 'Esta es la descripción de la tarea', 4, 1)

  index(){
    return JSON.parse(localStorage.getItem('tasks'));
  }
  get(id: number){
    this.tasks = this.index();
    this.task = this.tasks.find(t => t.id == id );
    return this.task; 
  }
  save(task: Task){
    this.tasks = this.index();
    const taskIndex = this.tasks.findIndex(t => t.id == task.id );
    this.tasks[taskIndex] = task; 
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    console.log("tarea guardada");
  }

}

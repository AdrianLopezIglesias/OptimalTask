import { Injectable } from '@angular/core';
import { Task } from '../card/task'
import {getUniqueId} from '../helpers/idGenerator';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
  ) { }
  
  tasks = []; 
  task = new Task("1", 'Mi primer tarea', 'Esta es la descripción de la tarea', 4, "", 1)

  index(){
    return JSON.parse(localStorage.getItem('tasks'));
  }


  filteredIndex(father?: string){
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
    if(father){
      return this.tasks.filter(x => x.father == father);
    }else{
      return this.tasks.filter(x => x.father == "");
    }
  }

  get(id: string){
    this.tasks = this.index();
    console.log("abriendo tarea existente");
    this.task = this.tasks.find(t => t.id == id );
   
    return this.task; 
  }
  findByFather(fatherId: string){
    this.tasks = this.index();
    this.task = this.tasks.find(t => t.id == fatherId );
    return this.task; 
  }

  new(father){  
    if(!father){ father = "";}
    const task = new Task(getUniqueId(1), "", "", 0, father, 0 );
    this.tasks = this.index();
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    console.log("Creando nueva tarea: ");
    console.log(task);
    return task; 
  }

  save(task: Task){
    this.tasks = this.index();
    const taskIndex = this.tasks.findIndex(t => t.id == task.id );
    this.tasks[taskIndex] = task; 
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    console.log("tarea guardada");
  }

  delete(id: string){
    console.log("eliminando " + id);
    this.tasks = this.index();
    const taskIndex = this.tasks.findIndex(t => t.id == id );
    this.tasks.splice(taskIndex, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}

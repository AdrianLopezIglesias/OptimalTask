import { Injectable } from '@angular/core';
import { textChangeRangeIsUnchanged } from 'typescript';
import { Avance, Task } from '../card/task'
import {getUniqueId} from '../helpers/idGenerator';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
  ) { }
  
  tasks = []; 
  task: Task;

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

  posibleParentsIndex(id){
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
    this.tasks = this.tasks.filter(x => !x.family.includes(id));
    return this.tasks.filter(x => !x.id.includes(id))
  }

  get(id: string){
    this.tasks = this.index();
    this.task = this.tasks.find(t => t.id == id );
    return this.task; 
  }
  findByFather(fatherId: string){
    this.tasks = this.index();
    this.task = this.tasks.find(t => t.id == fatherId );
    return this.task; 
  }
  new(father){  
    let level = 0; 
    console.log("aca funciona");
    if(!father){ father = ""} else {level = this.findByFather(father).level + 1}
    let family = <any>[];

    if(father) {
      family = this.findByFather(father).family;
    } 
    family.push(father); 

    const task = new Task(getUniqueId(1), "", "", new Avance, father, level, family, 0 );

    this.tasks = this.index();
    if(!this.tasks){this.tasks = [];}
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

  adoptar(id: never, task: Task){
    const newParent = this.get(id);

    let newFamily = newParent.family;
    newFamily.push(id);

    task.family = newFamily;
    task.father = id;

    this.save(task);

    console.log(task);
    
    
    let childs = this.filteredIndex(task.id);
    let childsFamily = task.family.push(task.id as never);
    for (var i = 0; i < childs.length; i+=1) {
      childs.forEach(child => {
        this.adoptar(task.id as never, child);
      });
    }
    return task; 
  }
}

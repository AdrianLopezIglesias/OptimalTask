import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../services/tasks.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private t: TasksService,
  
    private router: Router) { }

  tasks;
  ngOnInit(): void {
    this.tasks = this.t.filteredIndex(""); 
  }

    newTask(){
    const newTask = this.t.new();
    this.router.navigate(['/task/'+newTask.id]);
  }

}

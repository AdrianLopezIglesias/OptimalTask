import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private t: TasksService) { }

  tasks;
  ngOnInit(): void {
    this.tasks = this.t.index(); 
  }

}
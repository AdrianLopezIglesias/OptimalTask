import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="d-grid gap-2">
      <div *ngIf="tasks">
        <div *ngFor="let task of tasks" class="w-100  ">
          <a
            class="btn btn-outline-secondary w-100 btn-sm mt-2"
            routerLink="/task/{{ task.id }}"
            >{{ task.name }}
            <app-slider-avance-status [task]="task"></app-slider-avance-status>
          </a>
        </div>
      </div>
      <a class="btn btn-outline-secondary btn-sm " (click)="newTask()">
        Nueva tarea
      </a>
    </div>
  `,
  // templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private t: TasksService, private router: Router) {}

  tasks;
  ngOnInit(): void {
    this.tasks = this.t.filteredIndex('');
  }

  newTask() {
    const newTask = this.t.new('');
    console.log('aca funciona');
    this.router.navigate(['/task/' + newTask.id]);
  }
}

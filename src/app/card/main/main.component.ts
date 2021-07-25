import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../task'

@Component({
  selector: 'card-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  task = {
    name: '',
    description: '',
    avance: 0,
    father: '',
    importance: 0,
    due: 'dd/mm/yyyy'
  }
  taskId = "";
  taskName ="";
  

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.taskId = params.get('id')
      });
  }


}

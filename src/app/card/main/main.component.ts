import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'card-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  taskId = "";

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.taskId = params.get('id')
      });
  }

}

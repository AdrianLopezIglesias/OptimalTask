import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'subtareas',
  templateUrl: './subtareas.component.html',
  styleUrls: ['./subtareas.component.css']
})
export class SubtareasComponent implements OnInit {

  constructor() { }

  @Output() change = new EventEmitter();
  @Input() childs;
  @Input() task;
  
  ngOnInit(): void {
  }

  newChild(e){
    this.change.emit(e);
  }

}

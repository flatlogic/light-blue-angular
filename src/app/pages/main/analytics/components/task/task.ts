import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  standalone: false,
  selector: 'task',
  templateUrl: './task.html',
  styleUrls: ['./task.scss']
})
export class TaskComponent {
  @Input('task') task: any;
  @Input('completed') completed: boolean = false;
  @Output('toggle') toggle: EventEmitter<any> = new EventEmitter();
}


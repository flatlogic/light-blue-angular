import {Component, Input} from '@angular/core';


@Component({
  selector: 'task-container',
  templateUrl: './task-container.template.html'
})
export class TaskContainerComponent {
  @Input() tasks: Array<any>;

  get tasksCompletedLength() {
    return this.tasks.filter(t => t.completed).length;
  }

  toggleTaskState(index) {
    const task = this.tasks.find(({id}) => id === index);
    task.completed = !task.completed;
  }
}


import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/shared-models/task-manager/task.model';

@Component({
  selector: 'app-task-filler-form',
  templateUrl: './task-filler-form.component.html',
  styleUrls: ['./task-filler-form.component.css']
})
export class TaskFillerFormComponent implements OnInit {

  taskItem: Task = new Task()
  @Output() onTaskSaveEmitter: EventEmitter<Task> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onSaveTasnBtnClick() { 
    // გავისვრით აქედან ობიექტს
    this.onTaskSaveEmitter.emit(this.taskItem);
    // taskItem ში შევინახავ new Task-ს რომ გავასუფთაო ჩემი თემფორარი ობიექტი
    this.taskItem = new Task()
  }

}

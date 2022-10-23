import { Component, Input, OnInit } from '@angular/core';
import { TaskType } from 'src/app/shared-models/task-manager/task-type.model';
import { Task } from 'src/app/shared-models/task-manager/task.model';
import { TaskManagerService } from 'src/app/shared-services/task-manager.service';

@Component({
  selector: 'app-task-table-card',
  templateUrl: './task-table-card.component.html',
  styleUrls: ['./task-table-card.component.css']
})
export class TaskTableCardComponent implements OnInit {
  @Input() taskItem: Task = new Task()
  
  constructor(private managerService: TaskManagerService) { }

  ngOnInit(): void {
  }

  onSelectValueChange(event: Event) {
    var val: number = Number((event.target as HTMLSelectElement).value)
    this.taskItem.Type = val;
    this.managerService.taskStatusChangeEmitter.emit(this.taskItem);
  }
}

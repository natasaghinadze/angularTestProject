import { Component, OnInit } from '@angular/core';
import { TableTask } from '../shared-models/task-manager/table-task.model';
import { Task } from '../shared-models/task-manager/task.model';
import { TaskManagerService } from '../shared-services/task-manager.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  tableTask: TableTask = new TableTask();

  constructor(private managerService: TaskManagerService) { }

  ngOnInit(): void {
    this.managerService.taskStatusChangeEmitter.subscribe((request: Task) => {
      var indexOfElement = this.tableTask.Todo.findIndex(item => item.id == request.id)
      if (indexOfElement >= 0) {
        this.tableTask.Todo.splice(indexOfElement,1)
      } else {
        indexOfElement = this.tableTask.InProgress.findIndex(item => item.id == request.id)
        if (indexOfElement >= 0) {
          this.tableTask.InProgress.splice(indexOfElement, 1)
        } else {
          indexOfElement = this.tableTask.Done.findIndex(item => item.id == request.id)
          this.tableTask.Done.splice(indexOfElement,1)
        }
      }
      this.tableTask.addNewTask(request)
    })
  }

  onTaskSaveSub(task: Task) {
    this.tableTask.addNewTask(task)
    console.log(this.tableTask);

  }

}

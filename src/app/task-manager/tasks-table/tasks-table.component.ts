import { Component, Input, OnInit } from '@angular/core';
import { TableTask } from 'src/app/shared-models/task-manager/table-task.model';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css']
})
export class TasksTableComponent implements OnInit {

  @Input() taskTable:TableTask = new TableTask()
  constructor() { }

  ngOnInit(): void {
  }

}

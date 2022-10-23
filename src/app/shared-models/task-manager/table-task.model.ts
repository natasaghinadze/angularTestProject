import { TaskType } from "./task-type.model";
import { Task } from "./task.model"

export class TableTask {
    public Todo: Task[] = [];
    public InProgress: Task[] = [];
    public Done: Task[] = []

    addNewTask(taskItem: Task) {
        switch (taskItem.Type) {
            case TaskType.ToDo:
                this.Todo.push(taskItem)
                break;

            case TaskType.InProgress:
                this.InProgress.push(taskItem)
                break;
            case TaskType.Done:
                this.Done.push(taskItem)
                break;
        }
    }
}
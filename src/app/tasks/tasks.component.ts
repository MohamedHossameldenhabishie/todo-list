import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks :Task[]=[];

  constructor() { }


  ngOnInit(): void {
  }
  addTask(title:string){
    let task =new Task();
    task.Title =title;
    this.tasks.push(task);
  }
  updateTask(task:Task){
  task.IsDone !=task.IsDone;
  }
  deletTask(index:number){
    this.tasks.splice(index,1);
  }
  getPendingTasksCount():number{
    return this.tasks.filter(task=>!task.IsDone).length;

  }

}

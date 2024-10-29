import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {Todo} from '../shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
//   adnotacja 1:
//   defaultValue = "test";
  todos : Todo[] = [];

  addTodo(todo : string) : void {
    this.todos.push({name: todo, isCompleted: false});
    console.log("Aktualna lista todo: ", this.todos);
  }
}

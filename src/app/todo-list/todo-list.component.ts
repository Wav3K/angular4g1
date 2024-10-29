import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';
import {Todo} from '../shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgStyle,
    NgClass
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
//   adnotacja 1:
//   defaultValue = "test";
  todos : Todo[] = [];
  ErrorMessage : string = "";

  addTodo(todo : string) : void {
    if(todo.length <=3){
      this.ErrorMessage = "zadanie musi miec wiecej niz 3 znaki";
      return;
    }
    this.ErrorMessage = "";
    this.todos.push({name: todo, isCompleted: false});
    console.log("Aktualna lista todo: ", this.todos);
  }

  changeTodoStatus(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  clearErrorMessage() {
    this.ErrorMessage = "";
  }

  protected readonly name = name;

  removeCompleted() {
     this.todos = this.todos.filter(item => !item.isCompleted);
  }
}

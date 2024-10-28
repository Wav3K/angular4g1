import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
//   adnotacja 1:
//   defaultValue = "test";
  todos : string[] = [];

  addTodo(todo : string) : void {
    this.todos.push(todo);
    console.log("Aktualna lista todo: ", this.todos);
  }
}

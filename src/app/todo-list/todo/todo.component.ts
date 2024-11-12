import {Component, Input} from '@angular/core';
import {NgClass, NgForOf, NgStyle} from "@angular/common";
import {Todo} from '../../shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    NgStyle
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Input() i!: number;

  changeTodoStatus(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }
}

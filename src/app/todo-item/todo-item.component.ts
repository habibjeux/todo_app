import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/types/todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input() todo: Todo = { title: '', completed: false };
  @Input() index: number = 0;

  @Output() removeTodo = new EventEmitter<number>();
  @Output() doneTodo = new EventEmitter<number>();

  onRemoveTodo() {
    this.removeTodo.emit(this.index);
  }

  onDoneTodo() {
    this.doneTodo.emit(this.index);
  }
}

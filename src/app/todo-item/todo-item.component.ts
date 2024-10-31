import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input() todo: string = '';
  @Input() index: number = 0;

  @Output() removeTodo = new EventEmitter<number>();

  onRemoveTodo() {
    this.removeTodo.emit(this.index);
  }
}

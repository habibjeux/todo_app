import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/types/todo';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'dones',
  templateUrl: './dones.component.html',
})
export class DonesComponent {
  constructor(private localStorageService: LocalStorageService) {}
  @Input() todos: Todo[] = [];

  @Output() onRemoveTodo = new EventEmitter<Todo[]>();
  @Output() onDoneTodo = new EventEmitter<Todo[]>();

  removeTodo(index: number) {
    this.todos.splice(index, 1);
    this.onRemoveTodo.emit(this.todos);
    this.refreshList();
  }

  doneTodo(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
    this.onDoneTodo.emit(this.todos);
    this.refreshList();
  }

  refreshList(): void {
    this.localStorageService.removeItem('todos');
    this.localStorageService.setItem('todos', JSON.stringify(this.todos));
  }
}

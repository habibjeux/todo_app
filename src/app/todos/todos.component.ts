import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/types/todo';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent {
  constructor(private localStorageService: LocalStorageService) {}

  newTodo: string = '';
  @Input() todos: Todo[] = [];

  @Output() onRemoveTodo = new EventEmitter<Todo[]>();
  @Output() onDoneTodo = new EventEmitter<Todo[]>();

  addTodo(todo: string) {
    if (todo === '') {
      return;
    }
    if (this.todos.find((t) => t.title === todo)) {
      return;
    }
    this.todos.push({ title: todo, completed: false });
    this.newTodo = '';
    this.refreshList();
  }

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

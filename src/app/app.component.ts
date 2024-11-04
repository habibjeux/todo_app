import { Component } from '@angular/core';
import { Todo } from 'src/types/todo';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private localStorageService: LocalStorageService) {}

  title = 'todo_app';
  index: number = 0;

  toggleIndex(index: number) {
    this.index = index;
  }

  private todos: Todo[] = [];

  getTodos(): Todo[] {
    if (this.todos.length > 0) return this.todos;
    else return this.getLocalTodos();
  }

  getLocalTodos(): Todo[] {
    if (JSON.parse(this.localStorageService.getItem('todos')!) != null)
      return JSON.parse(this.localStorageService.getItem('todos')!);
    else return [];
  }
}

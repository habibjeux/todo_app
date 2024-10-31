import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent {
  newTodo: string = '';
  @Input() todos: string[] = [];

  @Output() todoChange = new EventEmitter<string[]>();

  addTodo(todo: string) {
    if (todo === '') {
      return;
    }
    if (this.todos.includes(todo)) {
      return;
    }
    this.todos.push(todo);
    this.newTodo = '';
  }

  updateTodo(index: number, todo: string) {
    this.todos[index] = todo;
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
    this.todoChange.emit(this.todos);
  }
}

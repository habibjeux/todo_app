import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'todo_app';
  index: number = 0;

  toggleIndex(index: number) {
    this.index = index;
  }

  private todos: string[] = [];

  getTodos() {
    return this.todos;
  }
}

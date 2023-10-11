import { Component, VERSION } from '@angular/core';
import { ApiService } from './api.service';
import { ToDo } from './todo';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoLists: ToDo[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.get('todos').subscribe((res: ToDo[]) => {
      this.todoLists = res;
      console.log('data response', this.todoLists);
    });
  }
}

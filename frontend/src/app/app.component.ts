import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: Todo = { title: '', description: '', completed: false };
  githubUser = 'seu-usuario'; // troque para seu usuário GitHub

  constructor(private todoService: TodoService) {}

  ngOnInit() { 
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') document.body.classList.add('dark');
    this.load(); 
  }

  load() {
    this.todoService.getTodos().subscribe(data => this.todos = data);
  }

  add() {
    if (!this.newTodo.title?.trim()) return;
    this.todoService.create(this.newTodo).subscribe(() => {
      this.newTodo = { title: '', description: '', completed: false };
      this.load();
    });
  }

  toggle(todo: Todo) {
    todo.completed = !todo.completed;
    this.todoService.update(todo).subscribe(() => this.load());
  }

  remove(todo: Todo) {
    if (!todo.id) return;
    this.todoService.delete(todo.id).subscribe(() => this.load());
  }

  toggleTheme() {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  }
}

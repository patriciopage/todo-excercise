import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item/todo-item.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todos: Array<TodoItem>;

  constructor() {}

  ngOnInit(): void {
    this.todos = new Array();
  }

  addTodo(todo: TodoItem) {
    this.todos.push(todo);
  }

  deleteItemFromList(TodoItem){
    this.todos.splice(this.todos.indexOf(TodoItem), 1);
  }

}

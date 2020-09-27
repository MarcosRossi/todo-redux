import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.state';
import { filtrosValidos } from '../actions/filtro.actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  dataSource: Todo[] = [];
  filtroSeleccionado: filtrosValidos = 'todos'
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(({ todo, filtro }) => {
      this.dataSource = todo;
      this.filtroSeleccionado = filtro;
    })
    // this.store.select('todo').subscribe(data => this.dataSource = data)
  }

}

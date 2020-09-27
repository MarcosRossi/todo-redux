import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from './actions/filtro.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): unknown {
    switch (filtro) {
      case 'completados':
        return todos.filter(c => c.completado === true);
      case 'pendientes':
        return todos.filter(c => c.completado === false);
      default:
        return todos;
    }
  }

}

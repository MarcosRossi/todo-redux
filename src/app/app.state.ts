import { ActionReducerMap } from '@ngrx/store';

import { filtroReducer } from './todos/reducers/filtro.reducer';
import { todoReducer } from './todos/reducers/todo.reducers';

import { Todo } from './todos/models/todo.model';
import { filtrosValidos } from './todos/actions/filtro.actions';

export interface AppState {
    todo: Todo[],
    filtro: filtrosValidos,
}

export const appReducers: ActionReducerMap<AppState> = {
    todo: todoReducer, filtro: filtroReducer
}

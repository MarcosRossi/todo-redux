import { Action, createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from '../actions/filtro.actions';

export const initialState: filtrosValidos = 'todos';

const _filtroReducer = createReducer(initialState,
    on(setFiltro, (state, { filtro }) => filtro)
)

export function filtroReducer(state: filtrosValidos, action: Action) {
    return _filtroReducer(state, action)
}
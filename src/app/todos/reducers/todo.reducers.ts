import { Action, createReducer, on } from '@ngrx/store';
import { borrar, crear, editar, limpiarCompletados, toggle, toggleAll } from '../actions/todo.actions';
import { Todo } from '../models/todo.model';

export const initialState: Todo[] = [new Todo('Hola Mundo Ngrx')];


const _todoReducer = createReducer(initialState,
    on(crear, (state, { texto }) => [...state, new Todo(texto)]),
    on(toggle, (state, { id }) => toogleChange(state, id)),
    on(editar, (state, { id, texto }) => editChange(state, id, texto)),
    on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
    on(toggleAll, (state, { completado }) => state.map(todo => { return { ...todo, completado } })),
    on(limpiarCompletados, (state) => state.filter(todo => !todo.completado))
)

export function todoReducer(state: Todo[], action: Action) {
    return _todoReducer(state, action)
}

// Methods of reducer
const toogleChange = (state: Todo[], id: number): Todo[] => {
    return state.map(todo => {
        return {
            ...todo,
            completado: todo.id === id ? !todo.completado : todo.completado
        };
    });
}

const editChange = (state: Todo[], id: number, texto: string): Todo[] => {
    return state.map(todo => {
        return {
            ...todo,
            texto: todo.id === id ? texto : todo.texto
        };
    });
}
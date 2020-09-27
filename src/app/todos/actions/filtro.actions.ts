import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes'

export const setFiltro = createAction('[Filtro] Setear Filtro', props<{ filtro: filtrosValidos }>());
import { createAction, props } from '@ngrx/store';

export const crear = createAction('[Todo] Crear todo', props<{ texto: string }>());

export const editar = createAction('[Todo] Editar todo', props<{ id: number, texto: string }>());

export const toggle = createAction('[Todo] Toogle todo', props<{ id: number }>());

export const toggleAll = createAction('[Todo] Toogle Alls todo', props<{ completado: boolean }>());

export const borrar = createAction('[Todo] Borrar todo', props<{ id: number }>());

export const limpiarCompletados = createAction('[Todo] Borrar completados');
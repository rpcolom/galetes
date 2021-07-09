import { Action, createReducer, on } from '@ngrx/store';
import * as GeneralActions from './general.actions';

export interface State {
  rafavaluestate: number;
}

export const initialState: State = {
    rafavaluestate: 1000
  };

const generalReducer = createReducer(
    initialState,
    on(GeneralActions.addAction, state => ({ ...state, rafavaluestate: state.rafavaluestate + 1 })),
    on(GeneralActions.subtractAction, state => ({ ...state, rafavaluestate: state.rafavaluestate - 1 }))
);

export function reducer(state: State | undefined, action: Action) {
    return generalReducer(state, action);
}



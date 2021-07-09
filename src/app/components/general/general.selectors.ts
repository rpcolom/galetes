import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as GeneralReducer from "./general.reducer"

export const rafavaluestateState=createFeatureSelector<GeneralReducer.State>('general');

export const rafavaluestate=createSelector(
    rafavaluestateState,
    (state: GeneralReducer.State) => state.rafavaluestate
);

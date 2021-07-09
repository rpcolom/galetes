import { Store, StoreModule , select } from '@ngrx/store';
import { Component, OnInit} from '@angular/core';
import * as generalSelectors from './general.selectors';
import { Observable } from 'rxjs';
import * as GeneralActions from './general.actions';
import { State } from './general.reducer';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  rafavalue$: Observable<number>  = this.store.select(state => state.rafavaluestate);  

  // constructor(private store: Store<{ general: any}>) { 
  constructor(private store: Store<State>) { 
    store.subscribe(() => this.readState());
    this.readState();
  }

  ngOnInit(): void {
    this.rafavalue$=this.store.pipe(select(generalSelectors.rafavaluestate));
  }

  readState() {
    console.log("readState");
    this.rafavalue$=this.store.pipe(select(generalSelectors.rafavaluestate));
    // const state: State = this.store.state as State;
    // this.rafavalue$ = state.rafavaluestate;
    // this.rafavalue$! = state.rafavaluestate;
    // this.rafavalue$!=this.store.pipe(select(generalSelectors.rafavaluestate));
  }

  add() {
    this.store.dispatch(GeneralActions.addAction());
    console.log("ja he fet el add");
  }

  substract() {
    this.store.dispatch(GeneralActions.subtractAction());
    console.log("ja he fet el substract");
  }

  refresh() {
    this.rafavalue$=this.store.pipe(select(generalSelectors.rafavaluestate));
    console.log("Estem a refresh amb el valor de:"+this.rafavalue$!);
  }
}

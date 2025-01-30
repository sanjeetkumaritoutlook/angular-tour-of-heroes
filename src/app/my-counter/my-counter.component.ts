import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'; //inject store in component

import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {
  count$: Observable<number>;  //Connect `this.count$` stream to the current store `count` state

  // constructor() { }
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');  //store.select('count');
    //this.count$ = store.pipe(select('count'));  //use select function in a component
  //this.count$ = store.pipe(select(state => state.count));
  }
 

  increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment());
 
  }
 
  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement());

  }
 
  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset());

  }
  // ngOnInit(): void {
  // }

}

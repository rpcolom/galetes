// import { ThrowStmt } from '@angular/compiler';
// import { Injectable } from '@angular/core';
// import { Actions, ofType, createEffect } from '@ngrx/effects';
// import { of } from 'rxjs';
// import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
// import * as GeneralActions from './general.actions';

// @Injectable()
// export class GeneralEffects {
//   loadCustomers = createEffect(() => {
//     this.actions.pipe(
//       ofType(GeneralActions.addAction, GeneralActions.subtractAction),
//       switchMap(() =>
//         this.actions
//         // call the service
//         // this.customersService.getCustomers().pipe(
//         //   // return a Success action when the HTTP request was successfull (`[Customers Api] Load Sucess`)
//         //   map((customers) => CustomerApiActions.loadCustomersSuccess(customers)),
//         //   // return a Failed action when something went wrong during the HTTP request (`[Customers Api] Load Failed`)
//         //   catchError((error) => of(CustomerApiActions.loadCustomersFailed(error)))
//         // )
//       )
//     );
//   });

//   constructor(
//     // inject Actions from @ngrx/effects
//     private actions: Actions
//     // private customersService: CustomersService
//   ) {}
// }
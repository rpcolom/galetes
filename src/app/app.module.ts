import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralComponent } from './components/general/general.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import * as fromGeneral from './components/general/general.reducer';
// import { GeneralEffects } from './components/general/general.effects';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ general: fromGeneral.reducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    // EffectsModule.forRoot([GeneralEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




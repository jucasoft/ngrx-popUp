import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {RouterEffects} from './effects';
import {StoreModule} from '@ngrx/store';
import {routerReducer, RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomRouterStateSerializer} from '@root-store/router-store/custom-router-state-serializer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('router', routerReducer),
    EffectsModule.forFeature([RouterEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router', })
  ],
  declarations: [],
  providers: [
    {provide: RouterStateSerializer, useClass: CustomRouterStateSerializer}
  ]

})
export class RouterStoreModule {
}

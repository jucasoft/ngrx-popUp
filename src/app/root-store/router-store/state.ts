import {RouterReducerState} from '@ngrx/router-store';
import {NavigationExtras} from '@angular/router';
import {CustomSerializedRouterStateSnapshot} from '@root-store/router-store/custom-router-state-serializer';

export interface State extends RouterReducerState<CustomSerializedRouterStateSnapshot> {
  extras: NavigationExtras;
}

export const initialState: State = {
  state: null,
  navigationId: null,
  extras: null,
};

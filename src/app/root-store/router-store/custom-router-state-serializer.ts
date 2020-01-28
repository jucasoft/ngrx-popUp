import {ActivatedRouteSnapshot, NavigationExtras, Router, RouterStateSnapshot} from '@angular/router';
import {RouterStateSerializer, SerializedRouterStateSnapshot} from '@ngrx/router-store';
import {Injectable} from '@angular/core';

export interface CustomSerializedRouterStateSnapshot extends SerializedRouterStateSnapshot {
  extras: NavigationExtras;
}

@Injectable({
  providedIn: 'root'
})
export class CustomRouterStateSerializer
  implements RouterStateSerializer<CustomSerializedRouterStateSnapshot> {

  constructor(private router: Router) {
  }

  serialize(routerState: RouterStateSnapshot): CustomSerializedRouterStateSnapshot {
    const navigation = this.router.getCurrentNavigation();
    const extras = navigation.extras;
    return {
      root: this.serializeRoute(routerState.root),
      url: routerState.url,
      extras
    };
  }

  private serializeRoute(
    route: ActivatedRouteSnapshot
  ): ActivatedRouteSnapshot {
    console.log('CustomRouterStateSerializer.serializeRoute()');
    const children = route.children.map(c => this.serializeRoute(c));
    return {
      params: route.params,
      paramMap: route.paramMap,
      data: route.data,
      url: route.url,
      outlet: route.outlet,
      routeConfig: route.routeConfig
        ? {
          component: route.routeConfig.component,
          path: route.routeConfig.path,
          pathMatch: route.routeConfig.pathMatch,
          redirectTo: route.routeConfig.redirectTo,
          outlet: route.routeConfig.outlet,
        }
        : null,
      queryParams: route.queryParams,
      queryParamMap: route.queryParamMap,
      fragment: route.fragment,
      component: (route.routeConfig
        ? route.routeConfig.component
        : undefined) as any,
      root: undefined as any,
      parent: undefined as any,
      firstChild: children[0],
      pathFromRoot: undefined as any,
      children,
    };
  }
}

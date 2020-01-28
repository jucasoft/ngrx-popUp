import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeMainComponent} from './home-main/home-main.component';
import {HomeEditComponent} from '@views/home/home-edit/home-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: HomeMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: HomeEditComponent,
    outlet: 'popUp',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}

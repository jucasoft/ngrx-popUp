import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookMainComponent} from './book-main/book-main.component';
import {BookEditComponent} from '@views/book/book-edit/book-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: BookMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: BookEditComponent,
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
export class BookRoutingModule {
}

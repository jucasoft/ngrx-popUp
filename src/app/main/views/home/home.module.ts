import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeEditComponent} from './home-edit/home-edit.component';
import {HomeMainComponent} from './home-main/home-main.component';
import {HomeListComponent} from './home-list/home-list.component';
import {HomeRoutingModule} from './home-routing.module';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PipesModule} from '@core/pipe/pipes.module';
import {SearchModule} from '@components/search/search.module';

@NgModule({
  declarations: [
    HomeEditComponent,
    HomeMainComponent,
    HomeListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    PipesModule,
    SearchModule,
  ],
  providers: [],
  entryComponents: []
})
export class HomeModule {
}

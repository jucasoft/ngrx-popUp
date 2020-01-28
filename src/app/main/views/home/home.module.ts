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
import {SearchComponent} from '@components/search/search.component';
import {PipesModule} from '@core/pipe/pipes.module';
//testaaa
@NgModule({
  declarations: [
    HomeEditComponent,
    HomeMainComponent,
    HomeListComponent,
    SearchComponent
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
    PipesModule
  ],
  providers: [],
  entryComponents: []
})
export class HomeModule {
}

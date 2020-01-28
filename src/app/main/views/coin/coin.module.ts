import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoinEditComponent} from './coin-edit/coin-edit.component';
import {CoinMainComponent} from './coin-main/coin-main.component';
import {CoinListComponent} from './coin-list/coin-list.component';
import {CoinRoutingModule} from './coin-routing.module';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchComponent} from '@components/search/search.component';
import {PipesModule} from '@core/pipe/pipes.module';

//testaaa
@NgModule({
  declarations: [
    CoinEditComponent,
    CoinMainComponent,
    CoinListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoinRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    PipesModule
  ],
  providers: [],
  entryComponents: []
})
export class CoinModule {
}

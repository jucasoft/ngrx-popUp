import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookMainComponent} from './book-main/book-main.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookRoutingModule} from './book-routing.module';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PipesModule} from '@core/pipe/pipes.module';
import {SearchModule} from '@components/search/search.module';

@NgModule({
  declarations: [
    BookEditComponent,
    BookMainComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BookRoutingModule,
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
export class BookModule {
}

import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {BookStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {Book} from '@models/vo/book';

@Component({
  selector: 'app-book-main',
  templateUrl: 'book-main.component.html',
  styles: []
})
export class BookMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<Book> = BookStoreActions.actions;

  ngOnInit() {
    // this.ruleTables$ = this.store$.pipe(
    //   select(RuleTableStoreSelectors.selectFilteredItems),
    //   tap(values => this.updateRowGroupMetaData(values))
    // );
  }
}

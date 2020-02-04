import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {BookStoreActions, BookStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {Book} from '@models/vo/book';
import {RouterStoreActions} from '@root-store/router-store/index';
import {tap} from 'rxjs/operators';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';

@Component({
  selector: 'app-book-list',
  templateUrl: `book-list.component.html`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit {


  collection$: Observable<Book[]>;
  cols: any;

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit() {

    this.collection$ = this.store$.select(
      BookStoreSelectors.selectAll
    ).pipe(
      tap(values => {
        if (values && values.length > 0) {
          this.cols = Object.keys(values[0]);
        }
      })
    );

    this.store$.dispatch(
      BookStoreActions.SearchRequest({queryParams: {}})
    );

  }

  onEdit(item) {

    const data: PopUpData<Book> = {
      item,
      props: {title: 'Edit Book', route: 'book'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['book', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onCopy(value) {

    const item = {...{}, ...value, ...{id: null}};
    const data: PopUpData<Book> = {
      item,
      props: {title: 'Copy Book', route: 'book'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['book', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onDelete(item) {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.store$.dispatch(BookStoreActions.DeleteRequest({item}));
      }
    });

  }

}

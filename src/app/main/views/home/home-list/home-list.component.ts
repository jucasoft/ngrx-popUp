import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {HomeStoreActions, HomeStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {Home} from '@models/vo/home';
import {RouterStoreActions} from '@root-store/router-store/index';
import {tap} from 'rxjs/operators';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';

@Component({
  selector: 'app-home-list',
  templateUrl: `home-list.component.html`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeListComponent implements OnInit {


  collection$: Observable<Home[]>;
  cols: any;

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('HomeListComponent.constructor()');
  }

  ngOnInit() {
    console.log('HomeListComponent.ngOnInit()');

    this.collection$ = this.store$.select(
      HomeStoreSelectors.selectAll
    ).pipe(
      tap(values => {
        if (values && values.length > 0) {
          this.cols = Object.keys(values[0]);
        }
      })
    );

    this.store$.dispatch(
      HomeStoreActions.SearchRequest({queryParams: {}})
    );

  }

  onEdit(item) {
    console.log('HomeListComponent.onEdit()');

    const state: PopUpData<Home> = {
      item,
      props: {title: 'Edit Home', route: 'home'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGo({
      path: ['home', {outlets: {popUp: ['edit']}}],
      extras: {state}
    }));

  }

  onCopy(value) {
    console.log('HomeListComponent.onCopy()');

    const item = {...{}, ...value, ...{id: null}};
    const state: PopUpData<Home> = {
      item,
      props: {title: 'Copy Home', route: 'home'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGo({
      path: ['home', {outlets: {popUp: ['edit']}}],
      extras: {state}
    }));

  }

  onDelete(item) {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.store$.dispatch(HomeStoreActions.DeleteRequest({item}));
      }
    });

  }

}

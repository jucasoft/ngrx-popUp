import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {HomeStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {Home} from '@models/vo/home';

@Component({
  selector: 'app-home-main',
  templateUrl: 'home-main.component.html',
  styles: []
})
export class HomeMainComponent implements OnInit {

  actions: Actions<Home> = HomeStoreActions.actions;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    // this.ruleTables$ = this.store$.pipe(
    //   select(RuleTableStoreSelectors.selectFilteredItems),
    //   tap(values => this.updateRowGroupMetaData(values))
    // );
  }
}

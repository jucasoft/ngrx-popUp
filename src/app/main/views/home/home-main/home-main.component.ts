import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {HomeStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {Home} from '@models/vo/home';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-home-main',
  templateUrl: 'home-main.component.html',
  styles: []
})
export class HomeMainComponent implements OnInit {

  actions: Actions<Home> = HomeStoreActions.actions;

  constructor(private readonly store$: Store<RootStoreState.State>,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('HomeMainComponent.ngOnInit()');
    console.log('this.route.outlet', this.route.outlet);
  }
  

}

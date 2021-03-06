import {Component, HostListener, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreState, SlideMenuStoreActions, SlideMenuStoreSelectors} from '@root-store/index';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  open$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  @HostListener('document:keydown.escape', ['$event'])
  onMouseup(event: KeyboardEvent) {
    // Metodo invocato alla pressione di ESC, utilizzato per la chiusura di tutte le popUp o i toast.
  }

  onClickOutside($event, open, elements) {
    if (open && elements.offsetLeft === 0) {
      this.store$.dispatch(SlideMenuStoreActions.Open({open: !open}));
    }
  }

  ngOnInit() {
    this.open$ = this.store$.select(SlideMenuStoreSelectors.selectOpen);
  }

}

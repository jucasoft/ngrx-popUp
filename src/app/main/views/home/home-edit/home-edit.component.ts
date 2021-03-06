import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {Home} from '@models/vo/home';
import {FormGroup} from '@angular/forms';
import {HomeStoreActions} from '@root-store/home-store';


@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.component.html',
  styles: [``]
})
export class HomeEditComponent extends PopUpBaseComponent<Home> {

  form: FormGroup;
  keys: string[];

  setItemPerform(value: Home): void {
    const group = this.fb.group({});
    this.keys = Object.keys(value);
    this.keys.forEach(key => group.addControl(key, this.fb.control({value: value[key], disabled: key === 'id'})));
    this.form = group;
  }

  acceptPerform(item: Home): void {
    if (item.id) {
      this.store$.dispatch(HomeStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction(this.route)
        ]
      }));
    } else {
      this.store$.dispatch(HomeStoreActions.CreateRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction(this.route)
        ]
      }));
    }
  }

  // cancel(): void {
  //   this.store$.dispatch(closePopUpAction(this.route));
  // }
}

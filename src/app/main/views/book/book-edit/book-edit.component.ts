import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {Book} from '@models/vo/book';
import {FormGroup} from '@angular/forms';
import {BookStoreActions} from '@root-store/book-store';


@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styles: [``]
})
export class BookEditComponent extends PopUpBaseComponent<Book> {

  form: FormGroup;
  keys: string[];

  setItemPerform(value: Book): void {
    const group = this.fb.group({});
    this.keys = Object.keys(value);
    this.keys.forEach(key => group.addControl(key, this.fb.control({value: value[key], disabled: key === 'id'})));
    this.form = group;
  }

  acceptPerform(item: Book): void {
    if (item.id) {
      this.store$.dispatch(BookStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction(this.route)
        ]
      }));
    } else {
      this.store$.dispatch(BookStoreActions.CreateRequest({
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

import {Injectable} from '@angular/core';
import {Book} from '@models/vo/book';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
  providedIn: 'root'
})
export class BookService extends BaseCrudService<Book> {
  protected service = environment.webServiceUri + 'book';

  // search(value?: ICriteria): Observable<Response<Book[]>> {
  //   return of({
  //     hasError: false,
  //     message: '',
  //     data: [
  //       {
  //         id: '1',
  //         value: '10',
  //         name: 'xxxx',
  //         description: 'xxxx'
  //       },
  //       {
  //         id: '2',
  //         value: '20',
  //         name: 'xxxx',
  //         description: 'xxxx'
  //       },
  //       {
  //         id: '3',
  //         value: '30',
  //         name: 'xxxx',
  //         description: 'xxxx'
  //       }
  //     ]
  //   });
  // }

}

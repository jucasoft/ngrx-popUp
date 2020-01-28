import {Injectable} from '@angular/core';
import {Home} from '@models/vo/home';
import {environment} from '../../../environments/environment';
import {BaseCrudService, ICriteria, Response} from 'ngrx-entity-crud';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService extends BaseCrudService<Home> {
  protected service = environment.webServiceUri + 'home';

  // search(value?: ICriteria): Observable<Response<Home[]>> {
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

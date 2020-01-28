import {Injectable} from '@angular/core';
import {Coin} from '@models/vo/coin';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
  providedIn: 'root'
})
export class CoinService extends BaseCrudService<Coin> {
  protected service = environment.webServiceUri + 'coin';

  // search(value?: ICriteria): Observable<Response<Coin[]>> {
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

import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Home} from '@models/vo/home';

export const adapter: EntityCrudAdapter<Home> = createCrudEntityAdapter<Home>({
  selectId: model => Home.selectId(model),
});

export interface State extends EntityCrudState<Home> {
};

export const initialState: State = adapter.getInitialCrudState();

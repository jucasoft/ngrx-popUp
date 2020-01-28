import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Book} from '@models/vo/book';

export const adapter: EntityCrudAdapter<Book> = createCrudEntityAdapter<Book>({
  selectId: model => Book.selectId(model),
});

export interface State extends EntityCrudState<Book> {
};

export const initialState: State = adapter.getInitialCrudState();

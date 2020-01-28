import {HomeStoreState} from '@root-store/home-store';
import {BookStoreState} from '@root-store/book-store';
import {CoinStoreState} from '@root-store/coin-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';

export interface State {
  home: HomeStoreState.State;
  book: BookStoreState.State;
  coin: CoinStoreState.State;
  slide_menu: SlideMenuStoreState.State;
}

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// const back = window.history.back;
//
// window.history.back = function() {
//   console.log('location: ' + document.location + ', state: ' +
//     JSON.stringify(window.history.state));
//
//   return back.apply(this, arguments);
// };

// window.onpopstate = function(event) {
//   console.log('location: ' + document.location + ', state: ' +
//     JSON.stringify(event.state));
// };

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

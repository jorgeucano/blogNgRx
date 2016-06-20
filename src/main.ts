import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideRouter } from '@ngrx/router';
import { AppComponent, environment } from './app/';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  provideRouter(routes)
]);

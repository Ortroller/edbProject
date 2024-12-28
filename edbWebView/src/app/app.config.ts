import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { rootApi } from './env';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

export function getWSserverBase() : string{
  return 'ws://'+rootApi+'/ws';
}
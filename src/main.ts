import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Note: loader import location set using "esmLoaderPath" within the output target config
import { defineCustomElements } from '@alex-arriaga/stencil-sg-virtual-2020/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

defineCustomElements();

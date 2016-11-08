

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//http://stackoverflow.com/a/39520087/1731667
//https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md

platformBrowserDynamic().bootstrapModule(AppModule);

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {StoreModule} from '@ngrx/store';
import {reducer} from './reducers/disqus.reducer';
import { DisqusComponent } from './components/disqus/disqus.component';
import { HeaderComponent } from './components/header/header.component';
import { TimeagoModule,TimeagoIntl} from 'ngx-timeago';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    DisqusComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({disqus:reducer}),
    TimeagoModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [TimeagoIntl],
  bootstrap: [AppComponent]
})
export class AppModule { }

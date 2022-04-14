import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { ReaderComponent } from './reader/reader.component';
import { ReaderDirective } from './reader/reader.directive';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ReaderComponent, ReaderDirective],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighLightDirective } from './highlight.directive';
import { NoOpenDirective } from './no-open.directive';
import { ConfirmDirective } from './confirm.directive';
import { UserProfileComponent } from './user-profile.component';
import { Counter } from './counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HighLightDirective,
    NoOpenDirective,
    ConfirmDirective,
    UserProfileComponent,
	Counter
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

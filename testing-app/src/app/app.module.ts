import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { GreeterService } from './greeter/greeter.service';
import { TimeService } from './greeter/time.service';

import { TrimTextPipe } from './pipes/trimText.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    TrimTextPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GreeterService,
    TimeService
  ],
  bootstrap: [
    GreeterComponent
  ]
})
export class AppModule { }

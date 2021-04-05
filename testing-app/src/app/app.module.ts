import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { GreeterService } from './greeter/greeter.service';
import { TimeService } from './greeter/time.service';

import { TrimTextPipe } from './pipes/trimText.pipe';
import * as moment from 'moment';
import { ElapsedPipe } from './pipes/elapsed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    TrimTextPipe,
    ElapsedPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GreeterService,
    TimeService,
    { provide : 'MOMENT', useValue : moment}
  ],
  bootstrap: [
    GreeterComponent
  ]
})
export class AppModule { }

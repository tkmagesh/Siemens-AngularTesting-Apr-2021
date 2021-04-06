import { NgModule } from '@angular/core';
import { GreeterComponent } from './greeter.component';
import { GreeterService } from './greeter.service';
import { ElapsedPipe } from './pipes/elapsed.pipe';
import { TrimTextPipe } from './pipes/trimText.pipe';
import { TimeService } from './time.service';
import * as moment from 'moment';

@NgModule({
    declarations : [GreeterComponent, ElapsedPipe, TrimTextPipe],
    providers : [
        GreeterService, 
        TimeService, 
        { provide : 'MOMENT', useValue : moment}
    ],
    exports : [GreeterComponent],
    bootstrap : [GreeterComponent]
})
export class GreeterModule{

}
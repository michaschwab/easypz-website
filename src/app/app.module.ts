import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app/app.component';
import { CodableTimelineComponent } from './codable-timeline/codable-timeline.component';
import {NumberVisComponent} from './number-vis/number-vis.component';
import {AnimationService} from '../services/animation.service';
import {ZoomComponent} from './zoomable/zoomable.component';
import {LoggerComponent } from './logger/logger.component';
import {environment} from '../environments/environment';
import {RouterModule, Routes} from '@angular/router';
import {ComboService} from '../services/combo.service';
import {RoundPipe} from '../services/round.pipe';
import {RandomstringService} from 'services/randomstring.service';
import {TruncatePipe} from '../services/truncate.pipe';
import {BrowserinfoService} from '../services/browserinfo.service';
import {LibraryComponent} from './library/library.component';
import {HttpModule} from '@angular/http';
import {NumberToArrayPipe} from '../services/numbertoarray.pipe';
import {MedianPipe} from '../services/median.pipe';
import {StdevPipe} from '../services/stdev.pipe';
import {AveragePipe} from '../services/average.pipe';
import {StdeverrorPipe} from '../services/stdeverror.pipe';
import {FilteroutextremevaluesPipe} from '../services/filteroutextremevalues.pipe';
import {SubtractIndividuallyPipe} from 'services/subtractindividually.pipe';
import {FilterHighValuesService} from '../services/filterHighValues.service';
import {ResearchComponent} from "./research/research.component";
import {ShowcaseComponent} from "./showcase/showcase.component";
/*
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    /!*{ path: '',
        redirectTo: '/szd',
        pathMatch: 'full'
    },*!/
];*/

@NgModule({
  declarations: [
    AppComponent,
    CodableTimelineComponent,
    ZoomComponent,
    NumberVisComponent,
    LoggerComponent,
    ResearchComponent,
    ShowcaseComponent,
    LibraryComponent,
    RoundPipe,
    TruncatePipe,
    NumberToArrayPipe,
    MedianPipe,
    StdevPipe,
    StdeverrorPipe,
    SubtractIndividuallyPipe,
    AveragePipe,
    FilteroutextremevaluesPipe,
    FilterHighValuesService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    /*RouterModule.forRoot(appRoutes)*/
  ],
  providers: [AnimationService, ComboService, RandomstringService, BrowserinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

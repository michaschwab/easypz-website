import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {CodableTimelineComponent} from '../codable-timeline/codable-timeline.component';
import {ZoomComponent} from '../zoomable/zoomable.component';
/* tslint:disable */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit
{
    activeTab = 'library';
    
    ngAfterViewInit(): void
    {
        window.addEventListener('scroll', () =>
        {
            const scrollPos = window.pageYOffset + 67;
            const researchPos = document.getElementById('research').offsetTop;
            
            this.activeTab = scrollPos >= researchPos ? 'research' : 'library';
        });
    }
}

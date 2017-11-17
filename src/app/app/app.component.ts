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
    activeTab = 'showcase';
    
    ngAfterViewInit(): void
    {
        window.addEventListener('scroll', () =>
        {
            const scrollPos = window.pageYOffset + 67;
            const libraryPos = document.getElementById('library').offsetTop;
            const researchPos = document.getElementById('research').offsetTop;
            
            this.activeTab = 'showcase';
            
            if(scrollPos >= libraryPos && scrollPos < researchPos)
            {
                this.activeTab = 'library';
            }
            else if(scrollPos >= researchPos)
            {
                this.activeTab = 'research';
            }
        });
    }
    
    scrollTo(anchorName: string)
    {
        //let anchor = document.getElementsByName(anchorName)[0];
        //console.log(anchor, anchor.getBoundingClientRect());
        // For some reason scrollIntoView does not work for the first link.
        document.getElementsByName(anchorName)[0].scrollIntoView({block: 'start', behavior: 'smooth'});
    }
}

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
    activeTab = '';
    
    ngAfterViewInit(): void
    {
        window.addEventListener('scroll', () =>
        {
            const sections = ['showcase', 'library', 'about'];
            const scrollPos = window.pageYOffset + 67;
            
            const sectionPositions = sections.map(sectionName =>
                document.getElementById(sectionName).offsetTop
            );
            sectionPositions.push(1000000); // Infinity
    
            this.activeTab = '';
            
            sections.forEach((sectionName, index) =>
            {
                if(scrollPos >= sectionPositions[index] && scrollPos <= sectionPositions[index + 1])
                {
                    this.activeTab = sectionName;
                }
            });
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

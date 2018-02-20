import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

/* tslint:disable */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit
{
    @ViewChild("appContainer") appContainer: ElementRef;
    width: number;

    ngAfterViewInit(): void
    {
        this.width = this.appContainer.nativeElement.offsetWidth;
    }

    scrollTo(anchorName: string)
    {
        //let anchor = document.getElementsByName(anchorName)[0];
        //console.log(anchor, anchor.getBoundingClientRect());
        // For some reason scrollIntoView does not work for the first link.
        document.getElementsByName(anchorName)[0].scrollIntoView({block: 'start', behavior: 'smooth'});
    }
}

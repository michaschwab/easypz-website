import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: "home",
  templateUrl: "home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements AfterViewInit
{
    @ViewChild("homeContainer") homeContainer : ElementRef;
    
    width: number;
    timelineWidth = 400;
    
    showCode = {
        0: false,
        1: false,
        2: false,
        3: false,
    };

    ngAfterViewInit(): void
    {
        this.width = this.homeContainer.nativeElement.offsetWidth;
        this.timelineWidth = this.width < 1000 ? this.width - 30 : 420;
    }
}

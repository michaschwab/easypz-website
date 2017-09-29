import {AfterViewChecked, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: "research",
  templateUrl: "research.component.html",
  styleUrls: ["./research.component.scss"]
})
export class ResearchComponent implements AfterViewChecked
{
    @ViewChild("researchContainer") researchContainer : ElementRef;
    
    width: number;
    timelineWidth = 400;
    
    showCode = {
        0: false,
        1: false,
        2: false,
        3: false,
    };
    
    ngAfterViewChecked(): void
    {
        this.width = this.researchContainer.nativeElement.offsetWidth;
        this.timelineWidth = this.width < 1000 ? this.width - 30 : 420;
    }
}

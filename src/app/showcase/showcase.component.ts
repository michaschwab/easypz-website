import {AfterViewChecked, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: "showcase",
  templateUrl: "showcase.component.html",
  styleUrls: ["./showcase.component.scss"]
})
export class ShowcaseComponent implements AfterViewChecked
{
    @ViewChild("showcaseContainer") showcaseContainer : ElementRef;
    
    width: number;
    timelineWidth = 400;
    
    
    ngAfterViewChecked(): void
    {
        this.width = this.showcaseContainer.nativeElement.offsetWidth;
        this.timelineWidth = this.width < 1000 ? this.width - 30 : 420;
    }
}

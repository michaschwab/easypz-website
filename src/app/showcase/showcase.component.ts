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
    codeWidth: number;
    visualWidth: number;
    
    ngAfterViewChecked(): void
    {
        this.width = this.showcaseContainer.nativeElement.offsetWidth;
        this.codeWidth      = this.width < 1000 ? this.width - 30 : 650;
        this.visualWidth    = this.width < 1000 ? this.width - 30 : 300;
    }
}

import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: "library",
  templateUrl: "library.component.html",
  styleUrls: ["./library.component.scss"]
})
export class LibraryComponent implements AfterViewInit
{
    @ViewChild("libraryContainer") libraryContainer : ElementRef;

    width: number;
    timelineWidth = 400;

    ngAfterViewInit(): void
    {
        this.width = this.libraryContainer.nativeElement.offsetWidth;
        this.timelineWidth = this.width < 1000 ? this.width - 30 : 420;
    }
}

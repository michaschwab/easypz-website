import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'bookmark',
  templateUrl: 'bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements AfterViewInit
{
    @ViewChild('bookmarkContainer') bookmarkContainer: ElementRef;

    width: number;

    ngAfterViewInit(): void
    {
        this.updateSize();
    }

    @HostListener('window:resize', ['$event'])
    onResize()
    {
        this.updateSize();
    }

    updateSize()
    {
        this.width = this.bookmarkContainer.nativeElement.offsetWidth;
    }
}

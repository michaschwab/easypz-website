import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit
{
    @ViewChild('aboutContainer') aboutContainer: ElementRef;
    
    width: number;
    headshotWidth = 190;

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
        this.width = this.aboutContainer.nativeElement.offsetWidth;
        this.headshotWidth = this.width < 1000 ? (this.width - 40 - 52 - 46) / 2 : 190;
    }
}

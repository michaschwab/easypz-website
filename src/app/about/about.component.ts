import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit
{
    @ViewChild('aboutContainer') aboutContainer: ElementRef;
    
    width: number;

    ngAfterViewInit(): void
    {
        this.width = this.aboutContainer.nativeElement.offsetWidth;
    }
}

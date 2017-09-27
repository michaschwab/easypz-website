import {Component} from '@angular/core';

@Component({
  selector: "home",
  templateUrl: "home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent
{
    showCode = {
        0: false,
        1: false,
        2: false,
        3: false,
    }
}

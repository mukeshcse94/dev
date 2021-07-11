import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-progressbar',
  template: `<div class="bar" [style.width.%]="value"></div>`,
  styles: [`
  :host { 
      display: block; 
      width: 300px; 
      height: 25px; 
      border: 1px solid black; 
      margin-top: 16px;
    }
    
    .bar { 
      background: blue; 
      height: 100%; 
    }`],
    
  host: {
    // Sets the role for this component to "progressbar"
    role: 'progressbar',

    'aria-valuemin': '0',
    'aria-valuemax': '100',

    // Binding that updates the current value of the progressbar.
    '[attr.aria-valuenow]': 'value',
  }
})

export class ProgressbarComponent  {
  @Input() value = 0;
}

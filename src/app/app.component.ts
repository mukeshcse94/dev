import { Component } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HOROS } from './mocks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'demo';
  
  heroes = HOROS;
  
  selectedHero? : Hero;  
  onSelect(hero: Hero):void {
     this.selectedHero = hero
  }
}

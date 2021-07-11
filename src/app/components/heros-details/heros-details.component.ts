import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-heros-details',
  templateUrl: './heros-details.component.html',
})
export class HerosDetailsComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
@Input() hero?: Hero;
selectedHero? : Hero;  
  onSelect(hero: Hero):void {
     this.selectedHero = hero
  }
}
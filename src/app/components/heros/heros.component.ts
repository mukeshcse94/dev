import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HOROS } from '../../mocks';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
        })
export class HerosComponent implements OnInit {
  constructor() {console.log(this.selectedHero) }
  ngOnInit() {  }
  
  heroes = HOROS;
  
  selectedHero? : Hero;  
  onSelect(hero: Hero):void {
     this.selectedHero = hero
  }
}

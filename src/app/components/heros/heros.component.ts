import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HOROS } from '../../mocks';

@Component({
  selector: 'app-heros',
  template: `
            <ul class="heroes">
              <li *ngFor="let hero of heroes"
                [class.selected]="hero === selectedHero"
                (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
              </li>
            </ul>

            <div *ngIf="selectedHero">
              <h2>{{selectedHero.name | uppercase}} Details</h2>
              <div><span>id: </span>{{selectedHero.id}}</div>
              <div>
                <label for="hero-name">Hero name: </label>
                <input id="hero-name" [(ngModel)]="selectedHero.name" placeholder="name">
              </div>
            </div>
          `,
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

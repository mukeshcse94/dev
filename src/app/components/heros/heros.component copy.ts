import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';

@Component({
  selector: 'app-heros',
  template: `
            {{hero.name | uppercase}}
        <input type="text" id="name" name="name" [(ngModel)]="hero.name" />
      `,
    })
export class HerosComponent {
  hero: Hero={
    id:1,
    name:'ddddd'
  }
}

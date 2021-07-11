import { Injectable } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HOROS } from './mocks';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  constructor() { }
  
  getHeros(): Hero[]{
    return HOROS;
  }
}

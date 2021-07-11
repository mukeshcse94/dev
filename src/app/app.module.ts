import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HerosComponent } from './components/heros/heros.component';
import { HerosDetailsComponent } from './components/heros-details/heros-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HerosDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

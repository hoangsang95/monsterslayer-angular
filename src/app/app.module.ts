import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonsterAttackComponentComponent } from './monster-attack-component/monster-attack-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MonsterAttackComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

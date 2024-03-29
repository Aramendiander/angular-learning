import { NgModule } from '@angular/core';
import { Hero } from '../../../../01-typescript-intro/src/topics/08-classes';
import { ListComponent } from './list/list.component';
import { HeroComponent } from './hero/hero.component';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    ListComponent,
  ],
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  providers: [],
})
export class heroesModule { }

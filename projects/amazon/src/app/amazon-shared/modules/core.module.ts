import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularComponent } from '../components/popular/popular.component';
import { MainCardComponent } from '../components/main-card/main-card.component';
import { SecondaryCardComponent } from '../components/secondary-card/secondary-card.component';
import { RatingComponent } from '../components/rating/rating.component';



@NgModule({
  declarations: [
    PopularComponent,
    MainCardComponent,
    SecondaryCardComponent,
    RatingComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PopularComponent,
    MainCardComponent,
    SecondaryCardComponent,
    RatingComponent,
    

  ]
})
export class CoreModule { }

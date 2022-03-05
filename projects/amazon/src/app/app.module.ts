import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductService } from './product.service';
import { PrimengModule } from '../../../shared/modules/primeng.module';
import { FooterComponent } from './components/footer/footer.component';
import { MainHeaderComponent } from './components/+header/main-header/main-header.component';
import { HeaderComponent } from './components/+header/header/header.component';
import { SidebarComponent } from './components/+header/sidebar/sidebar.component';
import { NavbarComponent } from './components/+header/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CoreModule } from './amazon-shared/modules/core.module';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FilterPipe } from './amazon-shared/pipes/filter.pipe';
import { FilterbetweenPipe } from './amazon-shared/pipes/filterinterval.pipe';
import { SwipperComponent } from './amazon-shared/components/swipper/swipper.component';
import { SortByPipe } from './amazon-shared/pipes/sort-by.pipe';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainHeaderComponent,
    HeaderComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    CarouselComponent,
    NotFoundComponent,
    FilterPipe,
    FilterbetweenPipe,
    SwipperComponent,
    SortByPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    CoreModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

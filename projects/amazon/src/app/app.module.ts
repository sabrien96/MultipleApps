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

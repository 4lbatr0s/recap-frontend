import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarimageComponent } from './components/carimage/carimage.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ColorPipe } from './pipes/color.pipe';
import { BrandPipe } from './pipes/brand.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    CarimageComponent,
    CustomerComponent,
    ColorComponent,
    RentalComponent,
    NaviComponent,
    CarDetailsComponent,
    CarFilterPipe,
    ColorPipe,
    BrandPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

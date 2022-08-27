import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AsthmaComponent } from './asthma/asthma.component';
import { BpComponent } from './bp/bp.component';
import { CancerComponent } from './cancer/cancer.component';
import { CovidComponent } from './covid/covid.component';
import { DengueComponent } from './dengue/dengue.component';
import { DepressionComponent } from './depression/depression.component';
import { DiabetesComponent } from './diabetes/diabetes.component';
import { TyphoidComponent } from './typhoid/typhoid.component';
// import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
// import { PcComponent } from './pc/pc.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ContactusComponent,
    ProductsComponent,
    AboutusComponent,
    FirstpageComponent,
    AsthmaComponent,
    BpComponent,
    CancerComponent,
    CovidComponent,
    DengueComponent,
    DepressionComponent,
    DiabetesComponent,
    TyphoidComponent,
    // CartComponent,
    HeaderComponent
    // PcComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

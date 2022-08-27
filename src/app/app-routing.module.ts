import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from '../app/home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AsthmaComponent } from './asthma/asthma.component';
import { BpComponent } from './bp/bp.component';
import { CancerComponent } from './cancer/cancer.component';
import { TyphoidComponent } from './typhoid/typhoid.component';
import { DiabetesComponent } from './diabetes/diabetes.component';
import { DepressionComponent } from './depression/depression.component';
import { DengueComponent } from './dengue/dengue.component';
import { CovidComponent } from './covid/covid.component';
// import { CartComponent } from './cart/cart.component';
// import { PcComponent } from './pc/pc.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {path:'', component:FirstpageComponent},
  {path:'login',component:LoginComponent},
  {path:'Home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'products',component:ProductsComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'asthma',component:AsthmaComponent},
  {path:'bp',component:BpComponent},
  {path:'cancer',component:CancerComponent},
  {path:'typhoid',component:TyphoidComponent},
  {path:'diabetes',component:DiabetesComponent},
  {path:'depression',component:DepressionComponent},
  {path:'dengue',component:DengueComponent},
  {path:'covid',component:CovidComponent},
  // {path:'cart',component:CartComponent},
  // { path:'pc',component:PcComponent},
  {path:'header',component:HeaderComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensComponent } from './shopping/mens/mens.component';
import { WomensComponent } from './shopping/womens/womens.component';
import { KidsComponent } from './shopping/kids/kids.component';
import { SaleComponent } from './shopping/sale/sale.component';
import { SiraIncComponent } from './sira-inc/sira-inc.component';
import { TopsComponent } from './shopping/mens/tops/tops.component';
import { BottomsComponent } from './shopping/mens/bottoms/bottoms.component';
import { CoatsComponent } from './shopping/mens/coats/coats.component';
import { KurthiComponent } from './shopping/womens/kurthi/kurthi.component';
import { SareeComponent } from './shopping/womens/saree/saree.component';
import { SkirtsComponent } from './shopping/womens/skirts/skirts.component';
import { HomeComponent } from './shopping/home/home.component';
import { SvOpticalsComponent } from './sv-opticals/sv-opticals.component';
import { FormComponent } from './communication/form/form.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  
  { path: 'mens', component: MensComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'tops', component: TopsComponent},
    {path: 'bottoms', component: BottomsComponent},
    {path: 'coats', component: CoatsComponent}
  ] },

  { path: 'womens', component: WomensComponent, children: [
    {path: 'kurthi', component: KurthiComponent},
    {path: 'saree', component: SareeComponent},
    {path: 'skirts', component: SkirtsComponent}
  ] },
  
  { path: 'kids', component: KidsComponent },
  { path: 'sale', component: SaleComponent },
  { path: 'sira', component: SiraIncComponent },
  { path: 'universities', component: SvOpticalsComponent },
  {path: 'communication', component: FormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'cart', component: CartComponent},
  {path: 'udemy', loadChildren: () => import('./udemy/udemy.module').then((module) => module.UdemyModule )}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ProductPageComponent } from '../pages/product-page/product-page.component';
import { CategoryPageComponent } from '../pages/category-page/category-page.component';
import { CartPageComponent } from '../pages/cart-page/cart-page.component';
import { NoFoundPageComponent } from '../pages/no-found-page/no-found-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home', component: HomePageComponent },
    { path: 'product/:id', component:ProductPageComponent },
    { path: 'category/:id', component:CategoryPageComponent },
    { path: 'cart', component:CartPageComponent },
    { path: '404', component:NoFoundPageComponent },
    { path: '**', redirectTo: '/404'}                  
];

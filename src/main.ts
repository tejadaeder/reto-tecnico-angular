import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
//import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NgModule, enableProdMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './app/header/header.component';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProductGalleryComponent } from './app/product-gallery/product-gallery.component';
import { ProductDetailComponent } from './app/product-detail/product-detail.component';
import { HomeComponent } from './app/home/home.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { FakeApiService } from './app/services/fake-api.service';
import {  CarouselModule } from 'ngx-bootstrap/carousel';
import { FooterComponent } from './app/footer/footer.component';
import { CarritoDetalleComponent } from './app/carrito-detalle/carrito-detalle.component';
import { PreHeaderComponent } from './app/pre-header/pre-header.component';
import { CategoriasComponent } from './app/categorias/categorias.component';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './app/carousel/carousel.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'verCarrito', component: CarritoDetalleComponent },
  { path: 'verCatalogo', component: CategoriasComponent },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true }),
    FormsModule
  ],
  declarations: [  
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductGalleryComponent,
    ProductDetailComponent,
    FooterComponent,
    CarritoDetalleComponent,
    PreHeaderComponent,
    CategoriasComponent,
    CarouselComponent
  ],
  bootstrap: [AppComponent],

  providers: [
    { provide: FakeApiService, useClass: FakeApiService},

  ],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

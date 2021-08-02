import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './pages/product/product.component';
import { AboutUsComponent } from './pages/about/about-us.component';
import { ContactUsComponent } from './pages/contact/contact-us.component';
import { OurClientsComponent } from './pages/our-clients/our-clients.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';

import { RepositoriesProvider } from './core/utility/providers';
import { NavbarComponent } from './pages/components/navbar/navbar.component';
import { FooterComponent } from './pages/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    AboutUsComponent,
    ContactUsComponent,
    OurClientsComponent,
    ProductCategoryComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [RepositoriesProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}

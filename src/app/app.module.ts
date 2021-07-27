import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

import { ProductServiceImpl } from './core/services/impl/product.service-impl';
import { ClientsServiceImpl } from './core/services/impl/clients.service-impl';
import { CategoryServiceImpl } from './core/services/impl/category.service-impl';
import { FeedbackServiceImpl } from './core/services/impl/feedback.service-impl';

import { ProductRepository } from './core/repositories/product-repository';
import { ClientsRepository } from './core/repositories/clients-repository';
import { CategoryRepository } from './core/repositories/category-repository';
import { FeedbackRepository } from './core/repositories/feedback-repository';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    AboutUsComponent,
    ContactUsComponent,
    OurClientsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'product', component: ProductComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'our-clients', component: OurClientsComponent },
    ]),
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [
    { provide: ProductRepository, useClass: ProductServiceImpl },
    { provide: CategoryRepository, useClass: CategoryServiceImpl },
    { provide: FeedbackRepository, useClass: FeedbackServiceImpl },
    { provide: ClientsRepository, useClass: ClientsServiceImpl },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

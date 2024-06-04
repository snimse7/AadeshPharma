import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CartService } from './demo/service/cart.service ';

import {provideFirebaseApp,initializeApp} from '@angular/fire/app';
import {getAuth,provideAuth} from '@angular/fire/auth'
import { ApplicationConfig,importProvidersFrom } from "@angular/core";



@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService,CartService, ProductService,

        
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

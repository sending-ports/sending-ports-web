import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';
import { CardShipComponent } from './card-ship/card-ship.component';
import { ShipService } from './service/ship.service';
import { HttpModule } from "@angular/http";
import { ShipComponent } from './ship/ship.component';
import { ShipRegisterComponent } from './ship/ship-register/ship-register.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ShipMenuComponent } from './ship/ship-menu/ship-menu.component';
import { ShipListComponent } from './ship/ship-list/ship-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CardShipComponent,
    ShipComponent,
    ShipRegisterComponent,
    BreadcrumbComponent,
    ShipMenuComponent,
    ShipListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot( ROUTES )
  ],
  providers: [ ShipService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

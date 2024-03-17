import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DeviceManagerComponent } from './device-manager/device-manager.component';
import { RoutingModule } from './routing/routing.module';
import { DevicesListComponent } from './device-manager/devices-list/devices-list.component';
import { DevicesComponentComponent } from './device-manager/devices-list/devices-component/devices-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DeviceManagerComponent,
    DevicesListComponent,
    DevicesComponentComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

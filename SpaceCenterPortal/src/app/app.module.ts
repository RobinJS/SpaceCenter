import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DeviceManagerComponent } from './device-manager/device-manager.component';
import { RoutingModule } from './routing/routing.module';
import { DeviceListComponent } from './device-manager/device-list/device-list.component';
import { DeviceItemComponent } from './device-manager/device-list/device-item/device-item.component';
import { AddDeviceFormComponent } from './device-manager/device-list/add-device-form/add-device-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DeviceManagerComponent,
    DeviceListComponent,
    DeviceItemComponent,
    AddDeviceFormComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

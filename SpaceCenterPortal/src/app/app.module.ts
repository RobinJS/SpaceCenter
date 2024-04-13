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
import { FormsModule } from '@angular/forms';
import { RemoveDevicePromptComponent } from './device-manager/device-list/remove-device-prompt/remove-device-prompt.component';
import { RoverControlComponent } from './controls/rover-control/rover-control.component';
import { SatelliteControlComponent } from './controls/satellite-control/satellite-control.component';
import { DeviceConnectingComponent } from './device-manager/device-list/device-connecting/device-connecting.component';
import { BatteryComponent } from './controls/instruments/battery/battery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DeviceManagerComponent,
    DeviceListComponent,
    DeviceItemComponent,
    AddDeviceFormComponent,
    RemoveDevicePromptComponent,
    RoverControlComponent,
    SatelliteControlComponent,
    DeviceConnectingComponent,
    BatteryComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

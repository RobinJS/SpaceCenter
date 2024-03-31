import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DeviceManagerComponent } from '../device-manager/device-manager.component';
import { RoverControlComponent } from '../controls/rover-control/rover-control.component';
import { SatelliteControlComponent } from '../controls/satellite-control/satellite-control.component';

const routes: Routes = [
    { path: '', redirectTo: '/devices', pathMatch: 'full' },
    { path: '#', redirectTo: '', pathMatch: 'full' },
    { path: 'devices', component:DeviceManagerComponent },
    { path: 'rover-controls/:id/:name', component:RoverControlComponent },
    // { path: 'rover-controls', component:RoverControlComponent },
    { path: 'satellite-controls/:id/:name', component:SatelliteControlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

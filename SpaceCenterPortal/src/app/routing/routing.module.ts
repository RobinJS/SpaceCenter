import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DeviceManagerComponent } from '../device-manager/device-manager.component';

const routes: Routes = [
    { path: '', redirectTo: '/devices', pathMatch: 'full' },
    { path: '#', redirectTo: '', pathMatch: 'full' },
    { path: 'devices', component:DeviceManagerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

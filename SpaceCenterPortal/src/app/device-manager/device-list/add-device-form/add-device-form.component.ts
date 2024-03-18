import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-device-form',
  templateUrl: './add-device-form.component.html',
  styleUrl: './add-device-form.component.css'
})
export class AddDeviceFormComponent {
    
    onAddDevice() {
        let name: string;
        let type: string;
        console.log(1);
    }
}

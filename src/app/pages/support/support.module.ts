import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicAngularModule } from '@ionic/angular';
import { SupportPage } from './support';
import { SupportPageRoutingModule } from './support-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicAngularModule,
    SupportPageRoutingModule
  ],
  declarations: [
    SupportPage,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SupportModule { }

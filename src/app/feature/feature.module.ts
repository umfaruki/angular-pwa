import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModalModule, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {GoogleChartsModule} from 'angular-google-charts';
import {FeaturePageComponent} from './feature-page/feature-page.component';
import {FeatureRoutingModule} from './feature-routing.module';

@NgModule({
  declarations: [
    FeaturePageComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    NgbModalModule,
    GoogleChartsModule
  ],
  entryComponents: [
  ]
})
export class FeatureModule { }

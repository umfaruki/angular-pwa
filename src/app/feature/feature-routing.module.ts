import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeaturePageComponent} from './feature-page/feature-page.component';

const routes: Routes = [
  { path: '', component: FeaturePageComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }

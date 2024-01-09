import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UdemyOverviewComponent } from './udemy-overview/udemy-overview.component';

const routes: Routes = [
  {path: '', component: UdemyOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UdemyRoutingModule { }

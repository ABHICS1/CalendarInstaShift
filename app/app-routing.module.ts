import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemindarComponent } from './remindar/remindar.component';

const routes: Routes = [
  { path: 'reminder', component: RemindarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RemindarComponent } from './remindar/remindar.component';
import { Calendar2Component } from './calendar2/calendar2.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    RemindarComponent,
    Calendar2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'remindar',
        component: RemindarComponent
      },
      {
        path: 'calendar1',
        component: CalendarComponent
      },
      {
        path: 'calendar2',
        component: Calendar2Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { PrimaComponent } from './component/prima/prima.component';
import { SecondaComponent } from './component/seconda/seconda.component';
import { Seconda1Component } from './component/seconda1/seconda1.component';
import { Seconda2Component } from './component/seconda2/seconda2.component';

const rotte: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'prima',
    component: PrimaComponent
  },
  {
    path: 'seconda',
    component: SecondaComponent,
    children: [
      {
        path: 'seconda1',
        component: Seconda1Component
      },
      {
        path: 'seconda2',
        component: Seconda2Component
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PrimaComponent,
    SecondaComponent,
    Seconda1Component,
    Seconda2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotte)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

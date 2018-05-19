import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { Phase1Component } from './phase1/phase1.component';
import { Phase2Component } from './phase2/phase2.component';
import { Phase3Component } from './phase3/phase3.component';
import { PhaseDetailComponent } from './phase-detail/phase-detail.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'phase1',
    component: Phase1Component,
  },
  {
    path: 'phase2',
    component: Phase2Component,
  },
  {
    path: 'phase3',
    component: Phase3Component,
  },
  {
    path: 'phase1/:id',
    component: PhaseDetailComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HomeComponent,
    Phase1Component,
    Phase2Component,
    Phase3Component,
    PhaseDetailComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

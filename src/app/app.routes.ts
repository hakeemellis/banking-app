// app.routes.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirects "/" to where I want it to
    { path: 'home', component: HomeComponent }, // Loads Home Components
    { path: 'login', component: LoginComponent }, // Loads Login Components
    { path: 'dashboard', component: DashboardComponent }, // Loads Login Components
];

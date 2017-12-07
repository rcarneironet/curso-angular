import { Routes } from '@angular/router'
import { Component } from '@angular/core'

import { HomeComponent } from './home/home.component';
import { BandasComponent } from './bandas/bandas.component';

export const ROUTES : Routes = [
    { path: '', component: HomeComponent },
    { path: 'bandas', component: BandasComponent }
]
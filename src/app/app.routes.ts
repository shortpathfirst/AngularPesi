import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LiftPageComponent } from './lift-page/lift-page.component';

export const routes: Routes = [

    {path:'', component:HomepageComponent},
    {path:'lifts', component:LiftPageComponent},
];

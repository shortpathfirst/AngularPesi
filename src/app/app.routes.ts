import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LiftPageComponent } from './pages/lift-page/lift-page.component';

export const routes: Routes = [

    {path:'', component:HomepageComponent},
    {path:'lifts', component:LiftPageComponent},
];

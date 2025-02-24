import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const routes: Routes = [

    {
        path:'', component:HomeComponent
    },
    {
        path:"contact" , component:ContactPageComponent
    }

];

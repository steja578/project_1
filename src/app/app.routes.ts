import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Aboutus } from './components/aboutus/aboutus';
import { Careers } from './components/careers/careers';
import { Contactus } from './components/contactus/contactus';
import { Notfound } from './components/notfound/notfound';
import { UserDetails } from './components/user-details/user-details';

export const routes: Routes = [
    {path:'home', component:Home},
    {path:'aboutus', component:Aboutus},
    {path:'careers', component:Careers},
    {path:'contactus', component:Contactus},
    {path:'user-details/:id', component:UserDetails},//it will take paraemeter
    {path:'', component: Home},//nothing found go to home
    {path:'**', component:Notfound },// if the url is not found it will redirect to notfound component
    
];

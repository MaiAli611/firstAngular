import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { Home } from './home/home';
import { About } from './about/about';
import { Portfolio } from './portfolio/portfolio';
import { Contact } from './contact/contact';

export const routes: Routes = [
   {path:'', component:Home},
   {path:'home', component:Home},
   {path:'about', component:About},
   {path:'portofolio', component:Portfolio},
   {path:'contact', component:Contact},
];

import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';




export const routes: Routes = [
   {path:'dashboard', component:DashboardComponent},
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{path:'skills', component:SkillsComponent},
{path:'experience', component:ExperienceComponent},
{path:'contact', component:ContactComponent},
{path:'projects', component:ProjectsComponent}
];

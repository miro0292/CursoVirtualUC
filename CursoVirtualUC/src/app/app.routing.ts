import {ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { IniciosesionComponent } from './components/iniciosesion/iniciosesion.component';
import { PreinscripcionComponent } from './components/preinscripcion/preinscripcion.component';
import { PostinscripcionComponent } from './components/postinscripcion/postinscripcion.component';
import { CursoComponent } from './components/curso/curso.component';
import { error } from '@angular/compiler/src/util';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes=[
    {path:'',component:HomeComponent},
    {path:'Home',component:HomeComponent},
    {path:'InicioSesion',component:IniciosesionComponent},
    {path:'PreInscripcion',component:PreinscripcionComponent},
    {path:'PostInscripcion',component:PostinscripcionComponent},
    {path:'Curso',component:CursoComponent},
    {path:'**',component:ErrorComponent}
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

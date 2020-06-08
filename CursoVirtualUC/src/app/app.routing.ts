import {ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { IniciosesionComponent } from './components/iniciosesion/iniciosesion.component';
import { PreinscripcionComponent } from './components/preinscripcion/preinscripcion.component';
import { PostinscripcionComponent } from './components/postinscripcion/postinscripcion.component';
import { CursoComponent } from './components/curso/curso.component';
import { CursoucComponent } from './components/cursouc/cursouc.component';
import { ErrorComponent } from './components/error/error.component';
import { SuccessComponent } from './components/success/success.component';
import { RealizarpagoComponent } from './components/realizarpago/realizarpago.component';
import { ValidatupagoComponent } from './components/validatupago/validatupago.component';
import { AdminComponent } from './components/admin/admin.component';
import { CrearExamenComponent } from './components/crear-examen/crear-examen.component';
import { ExamenComponent } from './components/examen/examen.component';


const appRoutes: Routes=[
    {path:'',component:HomeComponent},
    {path:'Home',component:HomeComponent},
    {path:'InicioSesion',component:IniciosesionComponent},
    {path:'PreInscripcion',component:PreinscripcionComponent},
    {path:'PostInscripcion/:user',component:PostinscripcionComponent},
    {path:'Curso/:nomcurso',component:CursoComponent},
    {path:'Cursouc/:nomcurso',component:CursoComponent},
    {path:'Success',component:SuccessComponent},
    {path:'ValidaPago',component:ValidatupagoComponent},
    {path:'RealizaPago',component:RealizarpagoComponent},
    {path:'Administrador',component:AdminComponent},
    {path:'CrearExamen',component:CrearExamenComponent},
    {path:'Examen',component:ExamenComponent},
    {path:'**',component:ErrorComponent}
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

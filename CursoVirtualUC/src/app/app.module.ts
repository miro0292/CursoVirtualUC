import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProvider} from './app.routing';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IniciosesionComponent } from './components/iniciosesion/iniciosesion.component';
import { PreinscripcionComponent } from './components/preinscripcion/preinscripcion.component';
import { HomeComponent } from './components/home/home.component';
import { PostinscripcionComponent } from './components/postinscripcion/postinscripcion.component';
import { CursoComponent } from './components/curso/curso.component';
import { ErrorComponent } from './components/error/error.component';
import { CursoucComponent } from './components/cursouc/cursouc.component';
import { SuccessComponent } from './components/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    IniciosesionComponent,
    PreinscripcionComponent,
    HomeComponent,
    PostinscripcionComponent,
    CursoComponent,
    ErrorComponent,
    CursoucComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-postinscripcion',
  templateUrl: './postinscripcion.component.html',
  styleUrls: ['./postinscripcion.component.css']
})
export class PostinscripcionComponent implements OnInit {

  public nombrecurso: string;
  public descurso: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{
      this.nombrecurso = params.user;
      this.descurso=`<span>UNIDAD 1. ¿QUÉ ES LA AUDITORIA?
      <br>
      <br>UNIDAD 2. DEFINICIÓN Y OBJETIVOS DE LA AUDITORIA
      <br>
      <br>UNIDAD 3. NORMAS Y MÉTODOS DE AUDITORIA
      <br>
      <br>UNIDAD 4. FUNDAMENTOS DE AUDITORIA</span>`
    });
  }

}

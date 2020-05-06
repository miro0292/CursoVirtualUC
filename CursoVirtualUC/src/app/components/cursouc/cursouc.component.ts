import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-cursouc',
  templateUrl: './cursouc.component.html',
  styleUrls: ['./cursouc.component.css']
})
export class CursoucComponent implements OnInit {
  public nombrecurso: string;
  public descurso: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{
      this.nombrecurso = params.nomcurso;
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

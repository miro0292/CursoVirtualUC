import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-crear-examen',
  templateUrl: './crear-examen.component.html',
  styleUrls: ['./crear-examen.component.css'],
  providers: [UserService]
})
export class CrearExamenComponent implements OnInit {

  public user: User;
  public status: string;
  public template_params: String;
  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.user = new User('', '', '', '', null, '', '', '', null, '', '', '', '');
  }

  ngOnInit(): void {
    console.log("Servicio de inisio de sesion Iniciado");
  }

  onSubmitlog() {

    console.log("el usuario ingresado es :" +this.user.usuario)
    this._router.navigate(['/Examen']);
  }

}

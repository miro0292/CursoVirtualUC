import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css'],
  providers: [UserService]
})
export class IniciosesionComponent implements OnInit {

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
    if(this.user.usuario === "admin"){
      this._router.navigate(['/Administrador']);
    }else{
      this._userService.getUser(this.user).subscribe(
        response => {
          console.log("estatus: " +response.status);
          if (response.status == 'success') {
                      
            this.status = 'success';
            
            this._router.navigate(['/PostInscripcion/'+ this.user.usuario ]);
          }if (response.status == 'error') {
            alert(response.descripcion);
          }
        },
        error => {
          console.log(error);
          this.status = 'error';
        }
      )    
    }
  }

}

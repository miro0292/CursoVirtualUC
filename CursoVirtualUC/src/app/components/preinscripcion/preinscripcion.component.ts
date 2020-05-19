import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router, ActivatedRoute, Params } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-preinscripcion',
  templateUrl: './preinscripcion.component.html',
  styleUrls: ['./preinscripcion.component.css'],
  providers: [UserService]
})
export class PreinscripcionComponent implements OnInit {

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
    console.log(this._userService.pruebas());
  }

  onSubmit() {
    this._userService.postUser(this.user).subscribe(
      response => {
        if (response.status == 'success') {
                    
          this.status = 'success';
          this.user = response.usuario;
          alert('Su Ususario es: '+ this.user.usuario+' Su contraseña es :'+this.user.contrasena+' Se le enviara un correo electronico con esta Informacion Gracias por inscribirse a este examen');

          var userID = 'user_SQ1honNmoXki6FMiXeYrE';
          var service_id = 'gmail_mike';
          var template_id ='template_iS76X8sD';
          var template_params = {
            "reply_to": this.user.correo,
            "name": this.user.nombre,
            "ususariooo": this.user.usuario,
            "contrasenaa": this.user.contrasena
         }  
         

          emailjs.send(service_id, template_id,template_params, userID)
            .then((result: EmailJSResponseStatus) => {
              console.log(result.text);
            }, (error) => {
              console.log(error.text);
            });
          this._router.navigate(['/Success']);
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

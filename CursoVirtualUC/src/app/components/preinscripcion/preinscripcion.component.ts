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
    console.log(this.user.nombre);
    console.log(this.user.correo);
    console.log(this.user.tel);

    this._userService.postUser(this.user).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.user = response.usuario;
          console.log(this.user);
          //alert('Su Ususario es: '+ this.user.usuario+' Su contraseña es :'+this.user.contrasena+' Se le enviara un correo electronico con esta Informacion Gracias por inscribirse a este examen');
          confirm("mensaje de confirmación");



            //.then((result: EmailJSResponseStatus) => {
            //  console.log(result.text);
            //}, (error) => {
            //  console.log(error.text);
            //});



          this._router.navigate(['/Success']);
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    )
  }


}

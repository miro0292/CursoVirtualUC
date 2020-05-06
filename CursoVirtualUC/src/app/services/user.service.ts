import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {Global} from './global';


@Injectable()
export class UserService{
    public url: string;
    constructor(
        private _http: HttpClient
    ){
        this.url=Global.url;
    }
    pruebas(){
        return "el servicio users funca";
    }
    postUser(user):Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'postUsuario',params,{headers:headers});
    }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()

export class UserService{

    url: string = '';

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    getUser(user: string): Observable<any> {
        return this._http.get(this.url + user);
    }
}
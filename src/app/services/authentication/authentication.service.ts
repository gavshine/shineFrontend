import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

const API_URL = environment.apiUrl;
const TOKEN_NAME: string = 'jwt_token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    //private headers = new Headers({ 'Content-Type': 'application/json' });
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    private authenticationUrl: string = API_URL + '/api/authenticate';

    constructor(private http: HttpClient) { }
 
    login(username: string, password: string) {
        return this.http.post<any>(this.authenticationUrl, { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
 
                return user;
            });
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    getToken(): string {
        return localStorage.getItem(TOKEN_NAME);
    }

    setToken(token: string): void {
        localStorage.setItem(TOKEN_NAME, token);
    }
}

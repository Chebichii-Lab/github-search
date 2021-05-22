import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryServiceService {
  _URL = 'https://api.github.com/users/';
  token = '?access_token=' + environment.api_key;

  constructor(public http: HttpClient) { }

  getRepoInfo(username: string): Observable<any> {
    return this.http.get(this._URL + username + '/repos' +  this.token)
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepositoryServiceService {
  _URL = 'https://api.github.com/users/';
  token = '?access_token=' + environment.GithubKey;

  constructor(public http: HttpClient) { }

  getRepoInfo(username: string): Observable<any> {
    return this.http.get(this._URL + username + '/repos' +  this.token)
  }
}

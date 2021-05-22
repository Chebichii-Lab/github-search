import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  users:Users[] = [];
  findUser: any;

  constructor(private http:HttpClient) { }


}
findUser(username){
  interface ApiResponse{
    login:string;
    html_url:string; 
    avatar_url:string;
    bio:any;
    name:any;
    location:any;
    followers: any;
    following: any;
    created_at : Date;
    public_repos: any
  }

  let searchEndpoint = "https://api.github.com/users/"+username+"?access_token="+environment.GithubKey;
  let promise = new Promise((resolve,reject)=>{
    this.users = [];
    this.http.get<ApiResponse>(searchEndpoint).toPromise().then(
      (results)=>{
      this.users.push(results);
      console.log(results)
      resolve();
    },error=>{
      
      reject(error);
    }
    )
  })
  return promise;
}

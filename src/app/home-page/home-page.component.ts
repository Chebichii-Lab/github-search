import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {HttpService} from '../http.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  users!:User[];

  searchUserName(username: string){
   this.httpServiceService.findUser(username).then(
     ()=>{
       this.users = this.httpServiceService.users;
       console.log(this.users);
     },
     (error: any)=>{
       console.log(error)
     }
   )
  }
  constructor(public httpServiceService: HttpService) { }

  ngOnInit() {
    
    this.searchUserName('Chebichii-Lab');
  }

}
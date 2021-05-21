import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  users:Users[];
  searchUserName(username){
   this.httpServiceService.findUser(username).then(
     ()=>{
       this.users = this.httpServiceService.users;
       console.log(this.users);
     },
     (error)=>{
       console.log(error)
     }
   )
  }
  constructor(public httpServiceService:HttpServiceService) { }

  ngOnInit() {
    this.searchUserName('Chebichii-Lab');
  }
}

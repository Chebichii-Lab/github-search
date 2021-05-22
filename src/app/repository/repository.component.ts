import { Component, OnInit } from '@angular/core';
import { RepositoryServiceService } from '../repository-service.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepoComponent implements OnInit {

  myRepos!:Repo[];
  constructor(public repoService:RepositoryServiceService) { }

  findRepo(username:string){
    this.repoService.getRepoInfo(username).subscribe((data: Repo[]) =>{
      this.myRepos = data;
      console.log(this.myRepos)

    })
  }
  ngOnInit() {
    this.findRepo('Chebichii-Lab');
  }
}
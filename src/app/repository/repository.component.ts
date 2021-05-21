import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  myRepos:RepoList[];
  constructor(public repoService:ReposServiceService) { }

  findRepo(username){
    this.repoService.getRepoInfo(username).subscribe(data =>{
      this.myRepos = data;
      console.log(this.myRepos)

    })
  }
  ngOnInit() {
    this.findRepo('Chebichii-Lab');
  }
}

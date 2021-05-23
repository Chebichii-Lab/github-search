import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepoComponent } from './repository/repository.component';

const routes: Routes = [
  { path: 'home', component:  HomePageComponent},
  { path: 'repositories', component: RepoComponent },
  { pathMatch: 'full', redirectTo: 'home', path: '' },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

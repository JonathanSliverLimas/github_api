import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Global } from '../../services/global';
import { User } from '../../models/user';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  providers: [UserService]

})
export class PerfilComponent implements OnInit {

  url: string = '';
  searchString: string = 'JonathanSliverLimas';
  user: User = new User('', '', 0, 0, 0, '', '', '', '');

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.buscar();
  }

  buscar(){
    if(this.searchString){
      this._userService.getUser(this.searchString).subscribe(

        response =>{
          if(response){
            this.user.name = response.name;
            this.user.bio = response.bio;
            this.user.followers = response.followers;
            this.user.following = response.following;
            this.user.public_repos = response.public_repos;
            this.user.avatar = response.avatar_url;
            this.user.url_github = response.html_url;
            this.user.twitter_username = response.twitter_username;
            this.user.website = response.blog;
            this.searchString = '';
          }else{
            this._router.navigate(['/home']);
          }
        },
  
        error => {
          this._router.navigate(['/home']);
        }
      );
    }
  }
}

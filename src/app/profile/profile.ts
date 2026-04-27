import { Component } from '@angular/core';
import { ApiAuth } from '../services/api-auth';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  constructor( private api : ApiAuth) {}
  ngOnInit(){

    this.api.getProfileInfo(localStorage.getItem("userId")!).subscribe({
      next : (resp : any) =>{
        console.log(resp);
        this.profileObj = resp
      },
      error : er => alert(er.message)
    })
    
  }

  profileObj  : any
}

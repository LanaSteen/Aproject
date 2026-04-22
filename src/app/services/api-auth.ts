import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiAuth {
     constructor(private http : HttpClient){


      }

      login(obj : any){
        return this.http.post("https://api.everrest.educata.dev/auth/sign_in", obj)

      }

      register(obj : any){
         return this.http.post("https://api.everrest.educata.dev/auth/sign_up", obj)
      }
}

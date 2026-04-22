import { ChangeDetectorRef, Component } from '@angular/core';
import { Api } from '../services/api';
import { Product } from '../models/product';
import { RouterLink } from "@angular/router";
import {LucideStar} from '@lucide/angular'

@Component({
  selector: 'app-home',
  imports: [RouterLink, LucideStar],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
[x: string]: any;

constructor(private api : Api, private cdr : ChangeDetectorRef){
  
}

ngOnInit(){
 this.api.getProducts("products/all?page_index=1&page_size=6").subscribe({
  next : ((resp : any) => {
    console.log(resp)
    this.produckts = resp.products
    this.cdr.detectChanges()
  
  }),

  error : er => alert(er.message)

 })
}

produckts: Product[]=[]

roundCeil(num : number){
    return Math.round(num)

}

giveStar(star : number){

  console.log(star)
}
}
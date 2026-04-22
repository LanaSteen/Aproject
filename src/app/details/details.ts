import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { Api } from '../services/api';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details implements OnInit {
  constructor(private router : ActivatedRoute, private cdr : ChangeDetectorRef, private api : Api){
    this.router.queryParams.subscribe(data =>{
      this.selectedId = data["id"]
      console.log(this.selectedId);
      
     
    })
        
    
  }
  // products/id/6526cb4e57e3ec956179e70f
  
  ngOnInit(){
    console.log(this.selectedId);
    this.api.getProducts(`products/id/${this.selectedId}`).subscribe({
      next:((resp:any)=>{
        console.log(resp);
        this.product = resp
        this.cdr.detectChanges()
      })
    })
    
  }

  selectedId: string = ""


   product : Product = new Product()




}







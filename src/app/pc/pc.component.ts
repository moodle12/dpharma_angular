// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-pc',
//   templateUrl: './pc.component.html',
//   styleUrls: ['./pc.component.css']
// })
// export class PcComponent implements OnInit {

//   constructor(private router:Router) { }
//   goToPage(pageName:string):void{
//     this.router.navigate([`${pageName}`]);
//   }
//   ngOnInit(): void {
//   }

// }
// import { Component, OnInit } from '@angular/core';
// //import { ApiService } from 'src/app/service/api.service';
// import { CartService } from 'src/app/services/cart.service';

// @Component({
//   selector: 'app-pc',
//   templateUrl: './pc.component.html',
//   styleUrls: ['./pc.component.css']
// })
// export class ProductsComponent implements OnInit {

//   public productList : any ;
//   public filterCategory : any
//   searchKey:string ="";
//   constructor(private cartService : CartService) { }

//   ngOnInit(): void {
  

//    // this.cartService.search.subscribe((val:any)=>{
//     //  this.searchKey = val;
//     //})
//   }

//   addtocart(item: any){
//     this.cartService.addtoCart(item);
//   }
//   filter(category:string){
//     this.filterCategory = this.productList
//     .filter((a:any)=>{
//       if(a.category == category || category==''){
//         return a;
//       }
//     })
  
//   }
// }



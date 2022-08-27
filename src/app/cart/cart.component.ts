// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';


// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {

//   constructor(private router:Router) { }
//   goToPage(pageName:string):void{
//     this.router.navigate([`${pageName}`]);
//   }
//   ngOnInit(): void {
//   }

// }
// import { Component, OnInit } from '@angular/core';
// import { CartService } from 'src/app/services/cart.service'

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {

//   public products : any = [];
//   public grandTotal !: number;
//   subscribe: any;
//   constructor(private cartService : CartService) { }

//   ngOnInit(): void{
//     this.cartService.getProducts()
//     .subscribe((res: any)=>{
//       this.products = res;
//       this.grandTotal = this.cartService.getTotalPrice();
//     })
//   }
//   removeItem(item: any){
//     this.cartService.removeCartItem(item);
//   }
//   emptycart(){
//     this.cartService.removeAllCart();
//   }

// }


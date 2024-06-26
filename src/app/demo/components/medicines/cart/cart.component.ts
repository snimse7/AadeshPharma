import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CartService } from 'src/app/demo/service/cart.service ';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartItems:any[];
  cartTotal=0;

  constructor(private cartService:CartService,private router:Router, private messageService:MessageService){}
  ngOnInit(){
    this.cartItems=this.cartService.getItems();
    this.countTotalAmt();
  }

  getTotal() {
    
  }
  search(id:string){
    this.router.navigate(['medicines/details',id])
  }
  removeFromCart(id:string){
    this.cartService.removeItem(id);
    // window.location.reload();
    let index=0;
    for(let i=0;i<this.cartItems.length;i++){
      if(this.cartItems[i].medicineId==id) {
        index=i;
        break;
      }
    }
    this.cartItems.splice(index,1)
    this.countTotalAmt();
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product Removed Successfully' });
  }
  countTotalAmt(){
    this.cartItems.forEach(item=>{
      this.cartTotal+=item.price;
    })
  }
  checkOut(){
    this.router.navigate(['/order'])
  }
}

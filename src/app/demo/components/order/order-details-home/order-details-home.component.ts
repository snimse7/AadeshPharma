import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { MessageService } from 'primeng/api';
import { Order } from 'src/app/demo/Model/Order';
// import { CartService } from 'src/app/demo/service/cart.service ';
import { OrderService } from 'src/app/demo/service/orderService/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './order-details-home.component.html',
  styleUrl: './order-details-home.component.scss'
})
export class OrderDetailsHomeComponent {

  orders:Order[];
  loading=true;
  // allOrders:any;
  constructor(private router:Router,private orderService:OrderService){}
  ngOnInit(){
    if(!localStorage.getItem("currentUser")) {
      this.router.navigate(['/auth/login'])
    }

    this.orderService.getOrderByUser().subscribe(data=>{
      this.orders=data;
      this.orders=this.orders.reverse();
      // console.log(this.orders);
      this.loading=false;
    })
  }

}

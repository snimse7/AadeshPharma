import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { OrderService } from '../../service/orderService/order.service';
import { UserService } from '../../service/UserServices/user.service';
import { dA } from '@fullcalendar/core/internal-common';
import { Order } from '../../Model/Order';
import { Router } from '@angular/router';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrl:'./dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

    

    ordercount=0;
    totalAmtofOrders=0;
    userCount=0;
    orders:Order[];

    loading=true;

    constructor(private orderService:OrderService,private userService:UserService,private router:Router) {

    }

    ngOnInit() {

        if(!localStorage.getItem("currentUser")) {
            this.router.navigate(['/auth/login'])
          }

        this.orderService.getOrderCounts().subscribe(data=>{
            this.ordercount=data;
        })

        this.orderService.getTotalAmtofOrders().subscribe(data=>{
            this.totalAmtofOrders=data;
        })

        this.userService.getUserCount().subscribe(data=>{
            this.userCount=data;
        })

        this.orderService.getAllOrders().subscribe(data=>{
            this.orders=data;
            this.orders=this.orders.reverse();
        this.loading=false;

        })

    }

}

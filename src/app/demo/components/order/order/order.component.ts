import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Order } from 'src/app/demo/Model/Order';
import { User } from 'src/app/demo/Model/User';
import { UserService } from 'src/app/demo/service/UserServices/user.service';
import { AadeshPharmaService } from 'src/app/demo/service/aadeshPharmaServices/aadesh-pharma.service';
import { CartService } from 'src/app/demo/service/cart.service ';
import { OrderService } from 'src/app/demo/service/orderService/order.service';

@Component({
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})
export class OrderComponent {
    cartItems:any[];
    cartTotal=0;
    user:User=new User();ingredient:any;
    order:Order=new Order();
    visible=false;
    orderId:any;
    constructor(private cartService:CartService,private router:Router, private messageService:MessageService,
                    private userService:UserService,private orderService:OrderService){}

    ngOnInit(){
        this.cartItems=this.cartService.getItems();
        this.countTotalAmt();
        this.getUser();

        this.order.items=this.cartItems;
        this.order.totalAmount=this.cartTotal;

    }
    countTotalAmt(){
        this.cartItems.forEach(item=>{
          this.cartTotal+=item.price;
        })
    }
    getUser(){
        const userData = localStorage.getItem('currentUser') || "";
        const user1=JSON.parse(userData);
        this.userService.getUserById(user1.id).subscribe((data)=>{
            this.user=data;
            this.order.customer=this.user;

            if(data==null){
            this.router.navigate(['/auth/login'])
                
            }
            // console.log(this.user)
            // this.progress=false;
        },
        (error)=>{
            this.router.navigate(['/auth/login'])
        })
    }
    removeFromCart(id){
        let index=0;
        for(let i=0;i<this.cartItems.length;i++){
          if(this.cartItems[i].medicineId==id) {
            index=i;
            break;
          }
        }
        this.cartItems.splice(index,1)
    }

    placeOrder(){
        this.orderService.createOrder(this.order).subscribe(data=>{
            this.orderId=data;
            this.visible=true;
        })

        
    }
 }
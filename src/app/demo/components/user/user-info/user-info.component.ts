import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { dA } from '@fullcalendar/core/internal-common';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Order } from 'src/app/demo/Model/Order';
import { Address, User } from 'src/app/demo/Model/User';
import { UserService } from 'src/app/demo/service/UserServices/user.service';
import { AadeshPharmaService } from 'src/app/demo/service/aadeshPharmaServices/aadesh-pharma.service';
import { CountryService } from 'src/app/demo/service/country.service';
import { OrderService } from 'src/app/demo/service/orderService/order.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
// import {User} from 'src/app/demo/Model/User.ts';
@Component({
    selector: 'app-login',
    templateUrl: 'user-info.component.html',
    
    styleUrl:'user-info.component.scss'
})
export class UserInfoComponent {

    
    user:User=new User();
    progress=true;
    // visible=true;
    valCheck: string[] = ['remember'];

    password!: string;
    email!:string;
    newAddress:Address=new Address();
    country:any[];
    states:string[];
    cities:any[];
    filteredCites:any[];
    orders:any;
    visible: boolean = false;
    addressVisible:boolean=false;
    showDialog() {
        this.visible = true;
    }

    selectedCity="";

    constructor(public layoutService: LayoutService,
                private router:Router,private userService:UserService,
                private addressService:CountryService,private confirmationService: ConfirmationService, 
                private messageService: MessageService,private orderService:OrderService)
    { 
        
    }
    ngOnInit(){
        this.getUser();

        this.orderService.getOrderByUser().subscribe(data=>{
            this.orders=data;
            console.log(data);
        })
        

        this.addressService.getStates().then(states => {
            this.states = states;
        });
        this.addressService.getCountries().then(country => {
            this.country = country;
        });

        this.addressService.getCities().then(city => {
            this.cities = city;
        });
    }
    
    updateUser(){
        this.userService.updateUser(this.user).subscribe(
            () => {
              this.visible = false;
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User Updated Successfully' });
            },
            (error) => {
              this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'User Update Failed' });
            }
          );
    }

    filterCity(){
         this.filteredCites=this.cities.filter(city => city.state === this.newAddress.state.name);
         return "";
        
    }
    addAddress(){
        let a="addAddress";
        if(this.newAddress.addressId==="-1"){
            this.userService.addAddress(this.newAddress).subscribe(data=>{
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Address Addes Successfully' });
                this.addressVisible=false;
                this.user.address.push(this.newAddress);
                this.newAddress=new Address();
    
            },
            (error)=>{
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'User Update Failed' });
                this.addressVisible=false;
    
            })
        }
        else{
            this.userService.updateAddress(this.newAddress).subscribe(data=>{
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Address Addes Successfully' });
                this.addressVisible=false;
                this.newAddress=new Address();

    
            },
            (error)=>{
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'User Update Failed' });
                this.addressVisible=false;
    
            })
        }
        
    }
    editAddress(addR:any){
        this.newAddress=addR;
        this.addressVisible=true;
    }

    confirm2(event: Event,id:string) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptButtonStyleClass: 'p-button-danger p-button-sm',
            accept: () => {
                this.userService.deleteAddress(id).subscribe(data=>{
                    this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
                    this.getUser();
                })
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }
    getUser(){
        const userData = localStorage.getItem('currentUser') || "";
        const user1=JSON.parse(userData);
        this.userService.getUserById(user1.id).subscribe((data)=>{
            this.user=data;
            if(data==null){
            this.router.navigate(['/auth/login'])
                
            }
            // console.log(this.user)
            this.progress=false;
        },
        (error)=>{
            this.router.navigate(['/auth/login'])
        })
    }
    getMyOrders(){
        this.router.navigate(['/order/my-orders'])
    }
}

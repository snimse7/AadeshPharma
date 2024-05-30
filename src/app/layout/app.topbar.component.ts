import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { Router, Routes } from '@angular/router';
import { CartService } from '../demo/service/cart.service ';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    logOutVisible=false;
    cartVal=0;

    constructor(public layoutService: LayoutService,private router:Router,private messageService:MessageService,cartService:CartService,private cdr: ChangeDetectorRef) { 
        if(localStorage.getItem('currentUser')){
            this.logOutVisible=true;
        }
        else{
            this.logOutVisible=false;
        }
        
        var cart=cartService.getItems();
        this.cartVal=cart.length;
        
        
    }
    redirectTo(){

        if(localStorage.getItem('currentUser')){
            this.router.navigate(['/user/user-profile'])

        }
        else{
            this.router.navigate(['/auth/login'])
        }
    }

    logOut(){
        localStorage.removeItem("currentUser");
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Logged Out Successfully' });
        this.logOutVisible=false;
        this.router.navigate(['/'])

    }
    logInScreen(){
        this.router.navigate(['/auth/login'])

    }


}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { dA } from '@fullcalendar/core/internal-common';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Medicine } from 'src/app/demo/Model/Medicine';
import { User } from 'src/app/demo/Model/User';
import { AadeshPharmaService } from 'src/app/demo/service/aadeshPharmaServices/aadesh-pharma.service';
import { CountryService } from 'src/app/demo/service/country.service';
import { UserService } from 'src/app/demo/service/UserServices/user.service';

@Component({
  selector: 'app-manage-user-home',
  templateUrl: './manage-user-home.component.html',
  styleUrl: './manage-user-home.component.scss'
})
export class ManageUserHomeComponent {
  user:User=new User();
  users:any[]=[];
  visible=false;
    private timeout?: number;
    loading=true;

    constructor(private aadeshPharmaService:AadeshPharmaService,private confirmationService: ConfirmationService, 
                private messageService: MessageService, private router:Router,private userService:UserService){

    }
    ngOnInit(){

        if(!localStorage.getItem("currentUser")) {
            this.router.navigate(['/auth/login'])
        }

        this.userService.getAllUsers().subscribe(data=>{
            this.users=data;
            this.loading=false;
            console.log(this.users);
        })
    }

    confirm2(event: Event,id:string) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptButtonStyleClass: 'p-button-danger p-button-sm',
            accept: () => {
                this.userService.deleteuUser(id).subscribe(data=>{
                    this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
                    this.users.splice(1,1);
                })
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }
    // onInput(value: string) {
    //     window.clearTimeout(this.timeout);
    //     this.timeout = window.setTimeout(() => this.onFilter(value), 600);
    //   }
    
    //     onFilter(val:string) {
    //         this.loading=true;
    //         if(val=="") {
    //             this.aadeshPharmaService.getAllMedicines().subscribe(
    //                 (data)=>{
                      
    //                 this.medicines=data;
    //                 this.loading=false;
    //                 },
    //                 (error) => {
                      
    //                 }
    //               );
    //         }
    //         else{
    //             this.aadeshPharmaService.searchMedicine(val).subscribe(
    //                 (data)=>{
                      
    //                 this.medicines=data;
    //                 this.loading=false;
    
    //                 },
    //                 (error) => {
                      
    //                 }
    //               );
        
    //         }
    //     }

    userInfo(id:string){
      for(let i=0;i<this.users.length;i++){
        if(this.users[i].id===id){this.user=this.users[i];break;}
      }
      this.visible=true;
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
  
}

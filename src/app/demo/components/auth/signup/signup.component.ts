import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/demo/Model/User';
import { UserService } from 'src/app/demo/service/UserServices/user.service';
import { AadeshPharmaService } from 'src/app/demo/service/aadeshPharmaServices/aadesh-pharma.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
// import {User} from 'src/app/demo/Model/User.ts';
@Component({
    selector: 'app-login',
    templateUrl: 'signup.component.html',
    styleUrl:'signup.component.scss'
})
export class SignUpComponent {

    
    user:User=new User();

    visible=true;
    valCheck: string[] = ['remember'];

    password!: string;
    email!:string;

    confirmPass="";

    signUp = new FormGroup({
        
        id: new FormControl(this.user.id),
        email: new FormControl(this.user.email,Validators.required),
        username: new FormControl(this.user.username, Validators.required),
        password:new FormControl("",Validators.required),
        firstName: new FormControl(this.user.firstName, Validators.required),
        lastName: new FormControl(this.user.lastName, Validators.required),
        isAdmin: new FormControl(this.user.isAdmin, Validators.required),
        address:new FormControl(this.user.address)
        
      });
    

    constructor(public layoutService: LayoutService,private router:Router,private userService:UserService,private fb: FormBuilder,private messageService:MessageService) { }

    ngOnInit(){
        this.signUp = this.fb.group({
            id:[this.user.id],
            email:[this.user.email,Validators.required],
            username:[this.user.username,Validators.required],
            password:["",Validators.required],
            firstName:[this.user.firstName,Validators.required],
            lastName:[this.user.lastName,Validators.required],
            isAdmin:[this.user.isAdmin,Validators.required],
            address:[this.user.address]
          });
    }
    loading=false;
    onSUbmit():void{
        this.loading=true;
        const userr=this.signUp.value;
        
        // if(userr.password!=this.confirmPass){
        //     this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Password and Confirm Password Did not Matches' });
        // }
        this.userService.register(userr,userr.password).subscribe((data)=>{
            
            localStorage.setItem('currentUser', JSON.stringify(data));
            this.router.navigate([""]);
            this.loading=false;

        },
        (error)=>{
         this.messageService.add({ severity: 'error', summary: 'Error', detail: "Username Already Taken. Please select other username" });
         this.loading=false;

        })
    }
}

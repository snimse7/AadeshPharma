import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/demo/Model/User';
import { UserService } from 'src/app/demo/service/UserServices/user.service';
import { AadeshPharmaService } from 'src/app/demo/service/aadeshPharmaServices/aadesh-pharma.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
// import {User} from 'src/app/demo/Model/User.ts';
@Component({
    selector: 'app-login',
    templateUrl: 'signup.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class SignUpComponent {

    
    user:User=new User();

    visible=true;
    valCheck: string[] = ['remember'];

    password!: string;
    email!:string;

    constructor(public layoutService: LayoutService,private router:Router,private userService:UserService) { }

    // http=inject(HttpClient);
    // authService=inject(AadeshPharmaService);

    onSUbmit():void{
        this.userService.register(this.user,this.password).subscribe((data)=>{
            const userJson = JSON.stringify(data.toJSON());
            localStorage.setItem("user", userJson);
            this.router.navigate(["/medicines"])
        })
    }
}

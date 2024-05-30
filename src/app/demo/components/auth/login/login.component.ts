import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/demo/service/UserServices/user.service';
import { AadeshPharmaService } from 'src/app/demo/service/aadeshPharmaServices/aadesh-pharma.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    password!: string;
    username!:string;



    constructor(public layoutService: LayoutService,private router:Router,private authService:UserService,private messageService:MessageService) { }

    // http=inject(HttpClient);
    // authService=inject(AadeshPharmaService);

    onSUbmit():void{
        var user={username:this.username,password:this.password}
        this.authService.login(user).subscribe((data)=>{
            localStorage.setItem('currentUser', JSON.stringify(data));
            // const userJson = JSON.stringify(data.toJSON());
            // localStorage.setItem("user", userJson);
            if(data=="Username or password is incorrect"){
            this.messageService.add({ severity: 'error', summary: 'Error', detail: data })
            }
            this.router.navigate(["/medicines"])
        },
        (error)=>{
            this.messageService.add({ severity: 'error', summary: 'Error', detail: "Username or password is incorrect" })
        })
    }
}



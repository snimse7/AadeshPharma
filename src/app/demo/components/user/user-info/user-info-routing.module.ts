import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  UserInfoComponent } from './user-info.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: UserInfoComponent }
    ])],
    exports: [RouterModule]
})
export class UserRoutingModule { }

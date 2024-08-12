import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ManageMedicineComponent } from './manage-medicine/manage-medicine.component';


import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DialogModule } from 'primeng/dialog';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ManageUserHomeComponent } from './manage-users-home/manage-user-home.component';
@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,

        TableModule,
        ButtonModule,
        InputTextModule,
        CalendarModule,
        InputNumberModule,
        DropdownModule,
        ChipsModule,
        InputTextareaModule,
        ToastModule,
        ConfirmPopupModule,
        ProgressSpinnerModule,
        InputSwitchModule,
        DialogModule

        
    ],
    declarations: [AdminComponent,ManageMedicineComponent,ManageUserHomeComponent],
    providers:[MessageService,ConfirmationService]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderRoutingModule } from './order-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { TimelineModule } from 'primeng/timeline';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


import { MessageService } from 'primeng/api';
import { OrderDetailsHomeComponent } from '../order-details-home/order-details-home.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        OrderRoutingModule,
        RadioButtonModule,
        ButtonModule,
        TableModule,
        DialogModule,
        TimelineModule,
        ProgressSpinnerModule
        
    ],
    declarations: [OrderComponent,OrderDetailsHomeComponent],
    providers:[MessageService]
})
export class OrderModule { }

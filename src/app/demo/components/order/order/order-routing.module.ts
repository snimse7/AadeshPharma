import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';
import { OrderDetailsHomeComponent } from '../order-details-home/order-details-home.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: OrderComponent },
        {path:'my-orders',component:OrderDetailsHomeComponent}


    ])],
    exports: [RouterModule]
})
export class OrderRoutingModule { }

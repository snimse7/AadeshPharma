import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MedicineHomeComponent } from './medicines.component';
import { MedicineDetailsComponent } from '../medicine-details/medicine-details.component';
import { CartComponent } from '../cart/cart.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: MedicineHomeComponent },
        { path: 'details/:id', component: MedicineDetailsComponent },
        { path: 'cart', component: CartComponent }


    ])],
    exports: [RouterModule]
})
export class MedicineHomeRoutingModule { }

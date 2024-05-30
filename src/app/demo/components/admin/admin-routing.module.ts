import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManageMedicineComponent } from './manage-medicine/manage-medicine.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AdminComponent },
        {path:'manage-medicine/:id',component:ManageMedicineComponent}
    ])],
    exports: [RouterModule]
})
export class AdminRoutingModule { }

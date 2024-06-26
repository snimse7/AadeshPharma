import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: 'dashboard', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: '', loadChildren: () => import('./demo/components/medicines/medicines/medicines.module').then(m => m.MedicinesModule) },
                    { path: 'medicines', loadChildren: () => import('./demo/components/medicines/medicines/medicines.module').then(m => m.MedicinesModule) },
                    { path: 'user', loadChildren: () => import('.//demo/components/user/user.module').then(m => m.UserModule) },
                    { path: 'admin', loadChildren: () => import('./demo/components/admin/admin.module').then(m => m.AdminModule) },
                    { path: 'order', loadChildren: () => import('./demo/components/order/order/order.module').then(m => m.OrderModule) },

                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'notfound', component: NotfoundComponent },


            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

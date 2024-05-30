import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-info-routing.module';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { FieldsetModule } from 'primeng/fieldset';
import { DividerModule } from 'primeng/divider';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { UserInfoComponent } from './user-info.component';
import { ConfirmationService, MessageService } from 'primeng/api';


@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        DialogModule,
        CardModule,
        PanelModule,
        InputSwitchModule,
        DropdownModule,
        InputNumberModule,
        ToastModule,
        FieldsetModule,
        DividerModule,
        ConfirmPopupModule,
        ProgressSpinnerModule
    ],
    declarations: [UserInfoComponent],
    providers: [
        MessageService,ConfirmationService
      ]
})
export class UserInfoModule { }

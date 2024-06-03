import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineHomeRoutingModule } from './medicines-routing.module';
import { MedicineHomeComponent } from './medicines.component';
import { MedicineDetailsComponent } from '../medicine-details/medicine-details.component';


import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { BreadcrumbModule } from 'primeng/breadcrumb';
// import { TabMenuModule } from 'primeng/tabmenu';
import { AccordionModule } from 'primeng/accordion';
import { DataViewModule } from 'primeng/dataview';
import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { ChipModule } from 'primeng/chip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CartComponent } from '../cart/cart.component';
import { MessageService } from 'primeng/api';



@NgModule({
    imports: [
        CommonModule,
        MedicineHomeRoutingModule,
        FormsModule,
		AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		DropdownModule,
		InputMaskModule,
		InputNumberModule,
		CascadeSelectModule,
		MultiSelectModule,
		InputTextareaModule,
		InputTextModule,
        CarouselModule,
        ImageModule,
        OverlayPanelModule,
        DividerModule,
        TagModule,
        BreadcrumbModule,
        AccordionModule,
        DataViewModule,
        PickListModule,
        OrderListModule,
        ChipModule,
        ProgressSpinnerModule,
        TableModule,
        ToastModule
    ],
    declarations: [MedicineHomeComponent,MedicineDetailsComponent,CartComponent],
    providers:[MessageService]
})
export class MedicinesModule { }

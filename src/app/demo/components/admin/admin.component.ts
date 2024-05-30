import { Component } from '@angular/core';
import { AadeshPharmaService } from '../../service/aadeshPharmaServices/aadesh-pharma.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

    medicines:any[]=[];
    private timeout?: number;
    loading=true;

    constructor(private aadeshPharmaService:AadeshPharmaService,private confirmationService: ConfirmationService, 
                private messageService: MessageService, private router:Router){

    }
    ngOnInit(){

        if(!localStorage.getItem("currentUser")) {
            this.router.navigate(['/auth/login'])
        }

        this.aadeshPharmaService.getAllMedicines().subscribe(data=>{
            this.medicines=data;
            this.loading=false;
        })
    }

    confirm2(event: Event,id:string) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptButtonStyleClass: 'p-button-danger p-button-sm',
            accept: () => {
                this.aadeshPharmaService.DeleteMedicine(id).subscribe(data=>{
                    this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
                    this.medicines.splice(1,1);
                })
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }
    add(){
        this.router.navigate(['/admin/manage-medicine','-1'])
    }

    onInput(value: string) {
        window.clearTimeout(this.timeout);
        this.timeout = window.setTimeout(() => this.onFilter(value), 600);
      }
    
        onFilter(val:string) {
            this.loading=true;
            if(val=="") {
                this.aadeshPharmaService.getAllMedicines().subscribe(
                    (data)=>{
                      
                    this.medicines=data;
                    this.loading=false;
                    },
                    (error) => {
                      
                    }
                  );
            }
            else{
                this.aadeshPharmaService.searchMedicine(val).subscribe(
                    (data)=>{
                      
                    this.medicines=data;
                    this.loading=false;
    
                    },
                    (error) => {
                      
                    }
                  );
        
            }
        }
        
 }
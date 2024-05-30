import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { an } from '@fullcalendar/core/internal-common';
import { SelectItem } from 'primeng/api';
import { Product } from 'src/app/demo/api/product';
import { AadeshPharmaService } from 'src/app/demo/service/aadeshPharmaServices/aadesh-pharma.service';
import { CartService } from 'src/app/demo/service/cart.service ';
import { ProductService } from 'src/app/demo/service/product.service';
import { AppTopBarComponent } from 'src/app/layout/app.topbar.component';

@Component({
    templateUrl: './medicines.component.html',
    styleUrls: ['./medicines.component.scss']
})
export class MedicineHomeComponent {

    getDetails(id:string){
        this.router.navigate(['medicines/details',id]);
    }
    
    medicinesList:any[]=[];

    sortOptions: SelectItem[] = [];

    sortOrder: number = 0;

    sortField: string = '';

    loading=true;
    constructor(private _aadeshPharmaService:AadeshPharmaService,private router: Router, private cartService:CartService) { }

    ngOnInit() {
        
        this.sortOptions = [
            { label: 'Price High to Low', value: '!price' },
            { label: 'Price Low to High', value: 'price' }
        ];

        this._aadeshPharmaService.getAllMedicines().subscribe(
            (data)=>{
              
            this.medicinesList=data;
            this.loading=false;
            },
            (error) => {
              
            }
          );
    }

    onSortChange(event: any) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    private timeout?: number;

  onInput(value: string) {
    window.clearTimeout(this.timeout);
    this.timeout = window.setTimeout(() => this.onFilter(value), 600);
  }

    onFilter(val:string) {
        this.loading=true;
        if(val=="") {
            this._aadeshPharmaService.getAllMedicines().subscribe(
                (data)=>{
                  
                this.medicinesList=data;
                this.loading=false;
                },
                (error) => {
                  
                }
              );
        }
        else{
            this._aadeshPharmaService.searchMedicine(val).subscribe(
                (data)=>{
                  
                this.medicinesList=data;
                this.loading=false;

                },
                (error) => {
                  
                }
              );
    
        }
    }
    
    addToCart(product: any): void {
        this.cartService.addItem(product);
        window.location.reload();
      }

 }
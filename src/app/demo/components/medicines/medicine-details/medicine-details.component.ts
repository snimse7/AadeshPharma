import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AadeshPharmaService } from 'src/app/demo/service/aadeshPharmaServices/aadesh-pharma.service';
import { CartService } from 'src/app/demo/service/cart.service ';

@Component({
  selector: 'app-medicine-details',
  standalone: false,
  templateUrl: './medicine-details.component.html',
  styleUrl: './medicine-details.component.scss'
})
export class MedicineDetailsComponent {

  constructor(private _aadeshPharmaService:AadeshPharmaService,private activatedRoute:ActivatedRoute, private cartService:CartService){}

  medicine:any;
  responsiveOptions: any[] | undefined;
  images: any[] =[];

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  d="";
  // l: MenuItem[] | undefined;
menu:any;
  ngOnInit(){
    

    this.activatedRoute.params.subscribe(paramsData=>{
      let id=paramsData['id'];
      let medicineId:string =id;
      //id=1413;
      // medicineId="1";
      this._aadeshPharmaService.medicineDetails(medicineId).subscribe(
        (data)=>{
          this.medicine=data;
          this.images=data.imagesUrl;
          console.log(data);
          this.d=this.medicine.medicineName;
          this.items = [
            { label: 'Medicines' ,routerLink:'/medicines'}, 
            { label:this.d }
        ];
        },
        (error) => {
          
        }
      );
      
    });


    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];


  

    this.home = { icon: 'pi pi-home', routerLink: '/landing' };

    

  }

  addToCart(product: any): void {
        
    this.cartService.addItem(product);
    window.location.reload();
  }

    
}

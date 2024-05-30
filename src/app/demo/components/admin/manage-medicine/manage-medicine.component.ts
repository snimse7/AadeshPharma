import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { dA } from '@fullcalendar/core/internal-common';
import { MessageService } from 'primeng/api';
import { Medicine } from 'src/app/demo/Model/Medicine';
import { AadeshPharmaService } from 'src/app/demo/service/aadeshPharmaServices/aadesh-pharma.service';
import { CountryService } from 'src/app/demo/service/country.service';

@Component({
  selector: 'app-manage-medicine',
  templateUrl: './manage-medicine.component.html',
  styleUrl: './manage-medicine.component.scss'
})
export class ManageMedicineComponent {
  
  medicine: Medicine = new Medicine();

  country: any;

  progress=true;

  formGroup = new FormGroup({
    medicineId: new FormControl(this.medicine.medicineId),
    medicineName: new FormControl(this.medicine.medicineName, Validators.required),
    medicineManufactureBy: new FormControl(this.medicine.medicineManufactureBy, Validators.required),
    quantity:new FormControl(this.medicine.quantity,Validators.required),
    manufacturedIn: new FormControl(this.medicine.manufacturedIn, Validators.required),
    expiryDate: new FormControl(this.medicine.expiryDate, Validators.required),
    price: new FormControl(this.medicine.price, Validators.required),
    countryOfOrigin: new FormControl(this.medicine.countryOfOrigin, Validators.required),
    composition: new FormControl(this.medicine.composition, Validators.required),
    tags: new FormControl(this.medicine.tags, Validators.required),
    directionOfUse: new FormControl(this.medicine.directionOfUse, Validators.required),
    routeOfAdministration: new FormControl(this.medicine.routeOfAdministration, Validators.required),
    sideEffects: new FormControl(this.medicine.sideEffects, Validators.required),
    medicineActivity: new FormControl(this.medicine.medicineActivity, Validators.required),
    interactions: new FormControl(this.medicine.interactions, Validators.required),
    precaustionAndWarning: new FormControl(this.medicine.precaustionAndWarning, Validators.required),
    dosage: new FormControl(this.medicine.dosage, Validators.required),
    storage: new FormControl(this.medicine.storage, Validators.required),
    imagesUrl: new FormControl(this.medicine.imagesUrl, Validators.required)
  });

  constructor(private fb: FormBuilder, private service: CountryService, private aadeshPharmaService: AadeshPharmaService,
              private messageService: MessageService, private activatedRoute: ActivatedRoute,private router:Router) { 

  }

  ngOnInit() {
    this.service.getCountries().then(countrys => {
      this.country = countrys;
    });

    
    this.activatedRoute.params.subscribe(paramsData => {
      let id = paramsData['id'];
      let medicineId: string = id;
      if(id!='-1'){
        this.aadeshPharmaService.medicineDetails(medicineId).subscribe(
          (data) => {
            this.medicine = data;
            this.progress=false;

            this.formGroup = this.fb.group({
              medicineId: [this.medicine.medicineId],
              medicineName: [this.medicine.medicineName, Validators.required],
              medicineManufactureBy: [this.medicine.medicineManufactureBy, Validators.required],
              quantity:[this.medicine.quantity,Validators.required],
              manufacturedIn: [this.medicine.manufacturedIn, Validators.required], 
              expiryDate: [this.medicine.expiryDate, Validators.required], 
              price: [this.medicine.price, Validators.required],
              countryOfOrigin: [this.medicine.countryOfOrigin, Validators.required],
              composition: [this.medicine.composition, Validators.required],
              tags: [this.medicine.tags, Validators.required],
              directionOfUse: [this.medicine.directionOfUse, Validators.required],
              routeOfAdministration: [this.medicine.routeOfAdministration, Validators.required],
              sideEffects: [this.medicine.sideEffects, Validators.required],
              medicineActivity: [this.medicine.medicineActivity, Validators.required],
              interactions: [this.medicine.interactions, Validators.required],
              precaustionAndWarning: [this.medicine.precaustionAndWarning, Validators.required],
              dosage: [this.medicine.dosage, Validators.required],
              storage: [this.medicine.storage, Validators.required],
              imagesUrl: [this.medicine.imagesUrl, Validators.required]
            });
            console.log(this.medicine);
          },
          (error) => {
  
          }
        );
      }
      else{
        this.progress=false;

      }
      
    });
  }

  upsert() {
    var d = this.formGroup.value;
    if (d.medicineId === '-1') {
      this.aadeshPharmaService.InsertMedicine(d).subscribe(data => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Added SuccesFully' });
        this.router.navigate(['/admin']);
      })
    }
    else {
      this.aadeshPharmaService.UpdateMedicine(d).subscribe(data => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated SuccesFully' });
        this.router.navigate(['/admin']);

      })
    }
  }
  onSubmit() {
  }
}

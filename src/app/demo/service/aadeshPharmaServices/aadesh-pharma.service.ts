import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Medicine } from '../../Model/Medicine';
import { an } from '@fullcalendar/core/internal-common';

@Injectable({
  providedIn: 'root'
})
export class AadeshPharmaService {

  // fireBaseAuth=inject(Auth);

  private baseUrl="https://AadeshPharmal.somee.com/";
  // private baseUrl="https://localhost:7157/";
  constructor( private http: HttpClient) { }
  
  

  medicineDetails(medicineId):Observable<any>{
    let url=this.baseUrl+"GetMedicineById?id="+medicineId;
    return this.http.get(url);
  }

  getAllMedicines():Observable<any>{
    let url=this.baseUrl+"GetAllMedicines";
    return this.http.get(url);
  }

  searchMedicine(name:string):Observable<any>{
    let url=this.baseUrl+"SearchMedicines?name="+name;
    return this.http.get(url);
  }

  upsertMedicine(Medicine:any):Observable<any>{
    const userData = localStorage.getItem('currentUser') || "";
    const user1=JSON.parse(userData);
    let t=user1.token;
    let userId=user1.id;
    let headers =new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${t}`
    });

    let url=this.baseUrl+"UpsertMedicine";
    return this.http.post(url,Medicine,{headers});


  }

  UpdateMedicine(medicine:any):Observable<any>{
    const userData = localStorage.getItem('currentUser') || "";
    const user1=JSON.parse(userData);
    let t=user1.token;
    let userId=user1.id;
    let headers =new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${t}`
    });

    let url=this.baseUrl+"UpdateMedicine";
    return this.http.put(url,medicine,{headers});
  }

  InsertMedicine(medicine:any):Observable<any>{
    const userData = localStorage.getItem('currentUser') || "";
    const user1=JSON.parse(userData);
    let t=user1.token;
    let userId=user1.id;
    let headers =new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${t}`
    });

    let url=this.baseUrl+"AddMedicine";
    return this.http.post(url,medicine,{headers});
  }

  DeleteMedicine(id:string):Observable<any>{
    const userData = localStorage.getItem('currentUser') || "";
    const user1=JSON.parse(userData);
    let t=user1.token;
    let userId=user1.id;
    let headers =new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${t}`
    });

    let url=this.baseUrl+"DeleteMedicine?id="+id;
    return this.http.delete(url,{headers});
  }



}

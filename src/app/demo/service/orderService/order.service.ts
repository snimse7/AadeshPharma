import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../Model/Order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl="https://AadeshPharmal.somee.com/";
  // private baseUrl="https://localhost:7157/";
  constructor( private http: HttpClient) { }
  //Order Services
  createOrder(order:Order):Observable<any>{
    const userData = localStorage.getItem('currentUser') || "";
    const user1=JSON.parse(userData);
    let t=user1.token;
    let userId=user1.id;
    let headers =new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${t}`
    });

    let url=this.baseUrl+"CreateOrder";
    return this.http.post(url,order,{headers});
  }

  getOrderByUser():Observable<any>{
    const userData = localStorage.getItem('currentUser') || "";
    const user1=JSON.parse(userData);
    let t=user1.token;
    let userId=user1.id;
    let headers =new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${t}`
    });

    let url=this.baseUrl+"GetOrderByUserId?userId="+userId;
    return this.http.get(url,{headers});
  }

  getOrderCounts():Observable<any>{
    const userData = localStorage.getItem('currentUser') || "";
    const user1=JSON.parse(userData);
    let t=user1.token;
    let userId=user1.id;
    let headers =new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${t}`
    });

    let url=this.baseUrl+"GetTotalOrderCount";
    return this.http.get(url,{headers});
  }

  getTotalAmtofOrders():Observable<any>{
    const userData = localStorage.getItem('currentUser') || "";
    const user1=JSON.parse(userData);
    let t=user1.token;
    let userId=user1.id;
    let headers =new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${t}`
    });

    let url=this.baseUrl+"getTotalAmtofOrders";
    return this.http.get(url,{headers});
  }

  getAllOrders():Observable<any>{
    const userData = localStorage.getItem('currentUser') || "";
    const user1=JSON.parse(userData);
    let t=user1.token;
    let userId=user1.id;
    let headers =new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${t}`
    });

    let url=this.baseUrl+"getAllOrders";
    return this.http.get(url,{headers});
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Address, User } from '../../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl="https://AadeshPharmal.somee.com/users/";
  // private baseUrl="https://localhost:7157/users/";
  
  constructor( private http: HttpClient) { }

  register(user:any, password:string):Observable<any>{
    let url=this.baseUrl+"createUser/?password="+password;
    return this.http.post(url,user);
  }

  login(user:Input):Observable<any>{
    let url=this.baseUrl+"authenticate";
    return this.http.post(url,user);
  }

  getUserById(id:string):Observable<any>{
    let url=this.baseUrl+"GetUserById?id="+id;
    const userData = localStorage.getItem('currentUser') || "";
    const user1=JSON.parse(userData);
    let t=user1.token;
    let headers =new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${t}`
    });
    return this.http.get(url,{headers});
  }

  updateUser(user:User):Observable<any>{
    let url=this.baseUrl+"UpdateUser";
    const userData = localStorage.getItem('currentUser') || "";
    const user1=JSON.parse(userData);
    let t=user1.token;
    let headers =new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${t}`
    });
    return this.http.put(url,user,{headers});
  }

  addAddress(address:Address):Observable<any>{
    const userData = localStorage.getItem('currentUser') || "";
    const user1=JSON.parse(userData);
    let t=user1.token;
    let userId=user1.id;
    let headers =new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${t}`
    });

    let url=this.baseUrl+"AddAddress?id="+userId;

    return this.http.put(url,address,{headers});

  }

  updateAddress(address:Address):Observable<any>{
    const userData = localStorage.getItem('currentUser') || "";
    const user1=JSON.parse(userData);
    let t=user1.token;
    let userId=user1.id;
    let headers =new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${t}`
    });

    let url=this.baseUrl+"UpdateAddress?id="+userId;

    return this.http.put(url,address,{headers});

  }

  deleteAddress(addressId:string):Observable<any>{
    const userData = localStorage.getItem('currentUser') || "";
    const user1=JSON.parse(userData);
    let t=user1.token;
    let userId=user1.id;
    let headers =new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${t}`
    });

    let url=this.baseUrl+"DeleteAddress?addressId="+addressId+"&id="+userId;

    return this.http.delete(url,{headers});

  }

}


 interface Input{
  username:string,
  password:string
 }
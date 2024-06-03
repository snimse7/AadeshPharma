import { Medicine } from "./Medicine";
import { Address, User } from "./User";

export class Order{
    public orderId:string="";
    public customer:User=new User;
    public items:Medicine[]=[];
    public orderAddress:Address=new Address;
    public totalAmount:number=0;
    public orderDate:Date =new Date;
    public delieveryDate?:Date | null=null; 
    public status:string="";  
    public modeOfPayment:string=";"  
}
import { cl } from "@fullcalendar/core/internal-common";

export class User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    private _passwordHash?: string; // Using a private field to simulate [JsonIgnore]
    isAdmin: boolean;
    address: Address[];

    constructor() {
        this.id = "";
        this.email = "";
        this.firstName = "";
        this.lastName = "";
        this.username = "";
        this.isAdmin = true;
        this.address = [];
    }
}

export class Address {
    addressId:string;
    address: string;
    zip: number;
    city: City;
    state: State;
    country: string;

    constructor() {
        this.addressId="-1";
        this.address = "";
        this.zip = 0;
        this.city = new City();
        this.state = new State();
        this.country = "India";
    }
}

export class State{
    name:string;
    code:string;
    constructor(){
        this.name="";
        this.code="";
    }
}

export class City{
    _id:string;
    name:string;
    state:string;
    constructor(){
        this._id="";
        this.name="";
        this.state="";
    }
}
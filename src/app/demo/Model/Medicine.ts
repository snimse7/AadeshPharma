export class Medicine {
    public medicineId: string = '-1'; 
    public medicineName: string = '';
    public medicineManufactureBy: string = '';
    public quantity:number=-0;
    public manufacturedIn: Date | null = null; 
    public expiryDate: Date | null = null; 
    public price: number = 0;
    public countryOfOrigin: Country = new Country;
    public composition: string[] = [];
    public tags: string[] = [];
    public directionOfUse: string = '';
    public routeOfAdministration: string = '';
    public sideEffects: string = '';
    public medicineActivity: string = '';
    public interactions: string = '';
    public precaustionAndWarning: string = '';
    public dosage: string = '';
    public storage: string = '';
    public imagesUrl: string[] = [];
}

export class Country{
    public name:string="";
    public code:string="";
}
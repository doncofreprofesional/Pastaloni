export interface User { 
    FullName: string;
    Email: string;
    IdentificationNumber: string; //dni
    Address: string;
    ZipCode: string;
    City: string;
    Country: string;
    Phone: string;
    User: string;
  }
  //usuario base, todos los usuarios sean clientes, vendedores, administradores, van a tener un User
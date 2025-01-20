import { UserLogged } from "../../../Model/DTO/Users/UserLogged";
import { LocationT } from '../../../Model/DTO/Location/LocationT';
import { Invoice } from '../../../Model/DTO/Invoice/Invoice';
export interface Client extends UserLogged{
    CompanyName: string;
    Location: LocationT;
    Invoices: Invoice[]
    Sector: number;
    //Company: Company;
  }
  //el cliente tendra razon social y facturas asociadas que vendran desde la solicitud de base de datos. 
  //La podra ver el cliente, al conjunto de facturas, mediante un endpoint se clasificara cuando las solicite el cliente o el vendedor (repartidor, administrador etc),
  // ambos pueden acceder a las facturas de dicho cliente
  //el cliente tendra una ubicacion, la ubicacion se utilizara para aproximar la ubicacion del vendedor y poder registrar la hora a la que paso a vender
  
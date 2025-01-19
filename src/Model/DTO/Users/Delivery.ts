import {UserLogged} from '../../../Model/DTO/Users/UserLogged'
import {Sector} from '../../../Model/DTO/Sector/Sector'
import {Invoice} from '../../../Model/DTO/Invoice/Invoice'

export interface Delivery extends UserLogged{
    Sectors: Sector[];
    Invoices: Invoice[];
    //Location: LocationT;
  }
  //el repartidor tendra zonas de entrega, aunque el sistema permitira hacer una entrega fuera de fecha o fuera de zona, cada actividad 
  //que no sea correspondiente al flujo normal de sistema se dara aviso a supervisores o administracion
  
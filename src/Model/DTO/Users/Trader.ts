import {UserLogged} from '../../../Model/DTO/Users/UserLogged';
import {LocationT} from '../../../Model/DTO/Location/LocationT';
import {Sector} from '../../../Model/DTO/Sector/Sector';

export interface Trader extends UserLogged{
    Sectors: Sector[];
    Location: LocationT; //se puede crear una nueva interfaz que sea solo para el supervisor
  }
  //cada vendedor tiene un conjunto de zonas, las zonas tienen clientes y los clientes tienen ubicaciones, de esta forma se estructuran los clientes
  //se registra la ubicacion del vendedor siempre que se haga una solicitud, la misma se actualizara cada un periodo de tiempo determinado
  
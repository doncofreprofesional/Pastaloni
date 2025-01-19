import { UserLogged } from '../../../Model/DTO/Users/UserLogged';
import { Trader } from '../../../Model/DTO/Users/Trader'
export interface Supervisor extends UserLogged {
    Traders: Trader[];
  }
  // el supervisor tiene un conjunto de vendedores, y las zonas del supervisor van a estar dadas por la suma de las zonas de los vendedores, para incluirle una zona "extra",
  //al supervisor, o sea, que el tambien pueda vender sin depender de los vendedores, tiene que tener el rol de vendedor incluido en sus roles
  //dato de color: se podra hacer una venta en cualquier comercio dependa o no de su zona, se registrara como venta del vendedor que hizo dicha venta y no del correspondiente
  //esta venta sera informada mediante una notificacion o alguna forma similar
  
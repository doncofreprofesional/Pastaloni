import { Client } from "../../../Model/DTO/Users/Client";
export interface Sector {
    Id: number;
    Clients: Client[];
    SellingDay: number;
    DeliverDay: number;
  }
  //una zona puede editarse, no necesariamente es por ubicacion, puede acomodarse respecto a necesidades. por ejemplo todos los supermercados chinos de Perez
  //Se concretara un dia de venta y un dia de entrega para dicha zona, registrada con un numero entero del 1 al 7 siendo 1 Lunes, y 7 un domingo
  
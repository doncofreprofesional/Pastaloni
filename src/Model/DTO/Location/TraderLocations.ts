import { Trader } from "../../../Model/DTO/Users/Trader";
import { TraderLocation } from "../../../Model/DTO/Location/TraderLocation";
export interface TraderLocations extends Trader{
    Locations: TraderLocation[];
  }
  // se necesita desde administracion el conjunto de ubicaciones
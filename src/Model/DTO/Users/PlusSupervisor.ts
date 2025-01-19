import { UserLogged } from "../../../Model/DTO/Users/UserLogged";
import { Supervisor } from "../../../Model/DTO/Users/Supervisor";

export interface PlusSupervisor extends UserLogged {
    Supervisors: Supervisor[];
  }
  //es escalable a cualquier nivel, ya que un supervisor puede ser supervisado a su vez por un gerente, y por cualquier persona que tenga vendedores a cargo al final
  //de la cadena de mando
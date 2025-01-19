import { User } from "../../../Model/DTO/Users/User";

export interface UserReg extends User { 
    Password: string;
  }
  //la contraseña solo se pedira para el registro, la contraseña nunca se devolvera, solo se validara a traves del backend
  
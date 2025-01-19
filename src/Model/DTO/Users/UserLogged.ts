import { User } from "../../../Model/DTO/Users/User";
import {Role} from '../../../Model/DTO/Users/Access/Role';
import {Company} from '../../../Model/DTO/Company/Company';

export interface UserLogged extends User {
    Id: number;
    Roles: Role[];
    Company: Company;
    Companies: Company[];
  }
//El usuario logeado, sea el tipo que sea tendra el identificador que se crea en la base de datos,
// y uno o varios roles que indicara los permisos que tiene, en este caso las secciones que puede acceder, 
//la aplicacion sera la misma para el cliente y para la empresa, se mostrara solo el menu que le corresponda
//para los roles de administrador no sera necesario crear una interfaz distinta, con el userlogged es mas que suficiente
//un usuario puede tener una compania asociada que es la compania para la cual trabaja, es nullable porque un cliente final no 
//tendra una compania asociada (o si)
//la distribuidora se puede registrar como cliente y como vendedor tambien, si Company es vacio es cliente final y no tiene vendedores
//Cuando un nuevo vendedor se crea una cuenta, este tiene que ser informado con el numero de compania para darse de alta como vendedor
//si uno se crea un usuario y no asocia una compania lo unico que aparecera sera la pantalla de "asociar compania" y la configuracion
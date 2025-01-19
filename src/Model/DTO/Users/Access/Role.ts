import {Menu} from '../../../../Model/DTO/Users/Access/Menu'
export interface Role {
    Id: number;
    Role: string;
    Menu: Menu[];
  }
  //un usuario puede tener mas de un rol, por lo cual hereda todos los menus correspondientes de cada rol
  
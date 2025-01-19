export interface Company {
    Id: number;
    IdSuperAdmin: number;
    FullName: string;
    Nickname:string;
    Email: string;
    IdentificationNumber: string; //cuit
    Address: string;
    ZipCode: string;
    City: string;
    Country: string;
    Phone: string;
  }
  //una compania puede ser vendedora y cliente, porque una distribuidora puede a su vez venderle a otra distribuidora
  //incluso dicha distribuidora puede vender a otra y asi, entonces un usuario puede ser cliente y administrador a la vez por ejemplo
  //puede manejar las compras y las ventas, tener las facturas de los envios por parte de las "fabricas" o importadores oficiales, etc
  //una compania tiene un usuario asociado que es el que crea la compania, este es super usuario, y puede ser cambiado desde la 
  //configuracion, desde el mismo superusuario, puede haber muchos super usuarios pero uno solo asociado a la compania
  //si el usuario pierde el acceso puede recuperarlo con el mail, si la persona es despedida o algo por el estilo 
  
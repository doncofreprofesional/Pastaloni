import { Invoice } from "../../../Model/DTO/Invoice/Invoice";
export interface TraderInvoices extends Invoice{
    ClientId: number;
  }
  //una venta tiene que estar asociada a un cliente y a un vendedor, pero no siempre necesitamos la informacion del cliente. el get de facturas tendra parametros de cliente
  //vendedor, y fechas
import { SoldProduct } from "../Product/SoldProduct";
export interface Invoice{
    Id: number;
    TraderId: number;
    Discount: number;
    Products: SoldProduct[];
    State: string;
    Total: number;
  }
  //la factura debe estar asociada a un vendedor, que es el que le hizo la venta, los descuentos y demas, el descuento viene aplicado por la suma 
  //de los descuentos de los productos vendidos
  //habra una tabla de diccionarios de estados, cada valor corresponde a un estado diferente, 
  //que podra ser manejado por la empresa para el proceso de entrega, puede ser por ejemplo: 0: cancelado, 1: Solicitado, 2: Preparado para el envio, 3: en camino, 4: entregado
  
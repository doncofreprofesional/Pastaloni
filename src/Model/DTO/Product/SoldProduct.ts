import { Product } from '../../../Model/DTO/Product/Product'
export interface SoldProduct extends Product {
    Discount: number;
  }
  //en las facturas vamos a tener una cantidad de productos con descuentos propios a cada producto, 
  //la empresa maneja los descuentos por marca o producto y no por factura, 
  //el rol del vendedor es jugar con dichos descuentos para concretar la venta y poder competir con el otro distribuidor que vende lo mismo
  
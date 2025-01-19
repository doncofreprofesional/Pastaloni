import { Product } from '../../../Model/DTO/Product/Product'
import { Supplier } from '../../../Model/DTO/Supplier/Supplier'
export interface FullProduct extends Product {
    Supplier: Supplier;
    Cost: number;
  }
  //desde la parte de administracion se necesita todos los datos del producto
  
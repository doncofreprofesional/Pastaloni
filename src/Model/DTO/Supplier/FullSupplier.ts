import { Supplier } from "../../../Model/DTO/Supplier/Supplier";
import { Product } from "../../../Model/DTO/Product/Product";
export interface FullSupplier extends Supplier {
    Products: Product[];
  }
  //cada proveedor a su vez tiene productos asociados
  
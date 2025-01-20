import { FullProduct } from "../../../../Model/DTO/Product/FullProduct";

export interface StockProduct extends FullProduct{
    Quantity: number;
}
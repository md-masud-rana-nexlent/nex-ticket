import { Product } from "../domain/product";

export interface IProductService{
    createProduct(input:Product):void;
    getProducts(limit:number):void;
    findProduct(id:string):void;
    updateProduct(id:string,input:Product):void;
    deleteProduct(id:string):void;
}
import { Product } from "../domain/product";

export interface IProduct{
    create(input:Product):Promise<Product |Error>;
    find(id:string):Promise<Product|Error>;
    get(limit:number):Promise<Product[]|Error>;
    update(id:string,input:Product):Promise<Product|Error>
    delete(id:string):Promise<Product|Error>


}
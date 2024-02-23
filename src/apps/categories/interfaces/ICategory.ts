import { Category } from "../domain/categories";

export interface ICategory{
    create(input:Category):Promise<Category |Error>;
    find(id:string):Promise<Category|Error>;
    get(limit:number):Promise<Category[]|Error>;
    update(id:string,input:Category):Promise<Category|Error>
    delete(id:string):Promise<Category|Error>


}
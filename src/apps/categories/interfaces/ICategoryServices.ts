import { Category } from "../domain/categories";

export interface ICategoryService{
    createCategory(input:Category):void;
    getCatagories(limit:number):void;
    findCategory(id:string):void;
    updateCategory(id:string,input:Category):void;
    deleteCategory(id:string):void;
}
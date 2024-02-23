

import { Category } from "../domain/categories";
import {ICategory } from "../interfaces/ICategory";
import { ICategoryService } from "../interfaces/ICategoryServices";

export class CategoryServices implements ICategoryService{
    private repository:ICategory;
    constructor(repository:ICategory){
        this.repository=repository;

    }
    async createCategory(input:Category){
        try{
            const category=await this.repository.create(input);
            return category;
        }
        catch(error){
            return error as Error
        }
    }
    findCategory(id: string) {
        return this.repository.find(id)
        
    }
    getCatagories(limit: number) {
        return this.repository.get(limit);
    }
    updateCategory(id: string, input: Category) {
        return this.repository.update(id,input)
        
    }
    deleteCategory(id: string) {
        return this.repository.delete(id)
    }
}
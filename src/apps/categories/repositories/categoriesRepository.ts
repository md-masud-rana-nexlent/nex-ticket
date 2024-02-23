import { dbConnect } from "@/configs/dbConn";
import { Category } from "../domain/categories";
import { ICategory } from "../interfaces/ICategory";
import { Model } from 'mongoose';

export class categoryRepository implements ICategory{
    private CategoryModel:Model<Category>;

    constructor(CategoryModel:Model<Category>){
        dbConnect();
        this.CategoryModel=CategoryModel
    }
    async create(input:Category){
        try{
            const category=await this.CategoryModel.create(input);
            return category;
        }
        catch(error){
            return error as Error;
        }
    }
    async find (id:string){
        try{
            const category=await this.CategoryModel.findById(id).exec();
            return category;

        }
        catch(error){
            return error as Error;
        }
    }
    async get(limit:number){
        try{
            const categorys=await this.CategoryModel.find().limit(limit).exec();
            return categorys;
        }
        catch(error){
            return error as Error;
        }
    }
    async update(id:string,input:Category){
        try{
            const category=await this.CategoryModel.findByIdAndUpdate(id,input);
            return category;
        }
        catch(error){
            return error as Error
        }
    }
    async delete(id:string){
        try{
            const category=await this.CategoryModel.deleteOne(id);
            return category;
        }
        catch(error){
            return error as Error
        }
    }

}
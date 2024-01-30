import { dbConnect } from "@/configs/dbConn";
import { Product } from "../domain/product";
import { IProduct } from "../interfaces/IProduct";
import { Model } from 'mongoose';

export class productRepository implements IProduct{
    private ProductModel:Model<Product>;

    constructor(ProductModel:Model<Product>){
        dbConnect();
        this.ProductModel=ProductModel
    }
    async create(input:Product){
        try{
            const product=await this.ProductModel.create(input);
            return product;
        }
        catch(error){
            return error as Error;
        }
    }
    async find (id:string){
        try{
            const product=await this.ProductModel.findById(id).exec();
            return product;

        }
        catch(error){
            return error as Error;
        }
    }
    async get(limit:number){
        try{
            const products=await this.ProductModel.find().limit(limit).exec();
            return products
        }
        catch(error){
            return error as Error;
        }
    }
    async update(id:string,input:Product){
        try{
            const product=await this.ProductModel.findByIdAndUpdate(id,input);
            return product
        }
        catch(error){
            return error as Error
        }
    }
    async delete(id:string){
        try{
            const product=await this.ProductModel.deleteOne(id);
            return product
        }
        catch(error){
            return error as Error
        }
    }

}
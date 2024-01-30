

import { Product } from "../domain/product";
import { IProduct } from "../interfaces/IProduct";
import { IProductService } from "../interfaces/IProductServices";

export class ProductServices implements IProductService{
    private repository:IProduct;
    constructor(repository:IProduct){
        this.repository=repository;

    }
    async createProduct(input:Product){
        try{
            const product=await this.repository.create(input);
            return product
        }
        catch(error){
            return error as Error
        }
    }
    findProduct(id: string) {
        return this.repository.find(id)
        
    }
    getProducts(limit: number) {
        return this.repository.get(limit);
    }
    updateProduct(id: string, input: Product) {
        return this.repository.update(id,input)
        
    }
    deleteProduct(id: string) {
        return this.repository.delete(id)
    }
}
import { Schema, model } from 'mongoose';
import { Product } from '../../domain/product';
import { IProduct } from '../../interfaces/IProduct';

const ProductSchema=new Schema<Product>({
    id:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true,

    },

})

const Product=model<IProduct>('product',ProductSchema);
export default Product;
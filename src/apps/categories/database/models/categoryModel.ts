import { Schema, model } from 'mongoose';
import { Category } from '../../domain/categories';
import { ICategory } from '../../interfaces/ICategory';

const CategorySchema=new Schema<Category>({
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

const Category=model<ICategory>('product',CategorySchema);
export default Category;
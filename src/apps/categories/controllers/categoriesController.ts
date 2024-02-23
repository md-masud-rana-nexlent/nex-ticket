import { APIGatewayProxyEventV2, Context } from 'aws-lambda';
import { ICategoryService } from '../interfaces/ICategoryServices';
import { RequestValidator } from '@/helpers/requestValidation';
import { errorResponse, successResponse } from '@/helpers/response';
import { createCategory } from '../validations/categories';
import { Category } from '../domain/categories';

export class productController <T extends Request |APIGatewayProxyEventV2,U extends Response|Context>{
    private service:ICategoryService;

    constructor(service:ICategoryService){
        this.service=service;
    }
    async onCreateProduct(req:T,res:U){
        try{
            const {errors}=await RequestValidator(createCategory,req.body);
            if(errors) return errorResponse(res,400,errors);
            const result=await this.service.createProduct(req.body as Category);
            return successResponse(res,result);

        }
        catch(error){
            const err=error as Error;
            return errorResponse(res,500,err)
        }
    }
}

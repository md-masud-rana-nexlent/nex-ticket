import { APIGatewayProxyEventV2, Context } from 'aws-lambda';
import { IProductService } from '../interfaces/IProductServices';
import { RequestValidator } from '@/helpers/requestValidation';
import { errorResponse, successResponse } from '@/helpers/response';
import { createProduct } from '../validation/product';
import { Product } from '../domain/product';

export class productController <T extends Request |APIGatewayProxyEventV2,U extends Response|Context>{
    private service:IProductService;

    constructor(service:IProductService){
        this.service=service;
    }
    async onCreateProduct(req:T,res:U){
        try{
            const {errors}=await RequestValidator(createProduct,req.body);
            if(errors) return errorResponse(res,400,errors);
            const result=await this.service.createProduct(req.body as Product);
            return successResponse(res,result);

        }
        catch(error){
            const err=error as Error;
            return errorResponse(res,500,err)
        }
    }
}


// interfaces 2 ta kno banailam
// http te serverless.ts jinis ta bujhi ni
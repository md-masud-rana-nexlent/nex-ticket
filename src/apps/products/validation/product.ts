import {  IsNotEmpty, IsOptional, IsString ,Length} from 'class-validator';

export class createProduct {
  @IsString()
  @IsNotEmpty()
  readonly id: string;

  @IsString()
  @Length(10, 20)
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsOptional()
  readonly description: string;

 
}

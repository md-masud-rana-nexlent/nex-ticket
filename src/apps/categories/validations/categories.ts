import {  IsNotEmpty, IsOptional, IsString ,Length} from 'class-validator';

export class createCategory {
  @IsString()
  @IsNotEmpty()
  readonly id: string;

  @IsString()
  @Length(10, 20)
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @Length(10, 20)
  @IsNotEmpty()
  readonly slug: string;

  @IsString()
  @IsOptional()
  readonly parent: string;

 
}

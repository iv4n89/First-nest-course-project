import { IsString, IsOptional, IsUUID, MinLength } from 'class-validator';



export class UpdateCarDTO {

    @IsOptional()
    @IsUUID()
    @IsString()
    id: string;

    @IsOptional()
    @IsString()
    brand?: string;

    @IsOptional()
    @IsString()
    model?: string;

}
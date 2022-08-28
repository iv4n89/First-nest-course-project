import { IsString, MinLength } from "class-validator";


export class CreateCarDTO {

    @IsString({ message: 'The brand must be a string' })
    @MinLength(3)
    readonly brand: string;

    @IsString({ message: 'The model must be a string' })
    @MinLength(3)
    readonly model: string;

}
import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

    constructor(private readonly carsService: CarsService) { }

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarsById(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.findOneById(id);
    }

    @Post()
    craeteCar( @Body() createCarDTO: CreateCarDTO ) {
        return this.carsService.create( createCarDTO );
    }

    @Patch(':id')
    updateCar( @Param('id', ParseUUIDPipe) id: string, @Body() updateCarDTO: UpdateCarDTO ) {
        return this.carsService.updateCar(id, updateCarDTO);
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe) id: string ) {
        return this.carsService.deleteCar(id);
    }

}

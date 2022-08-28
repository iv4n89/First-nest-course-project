import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        // { id: uuid(), brand: 'Toyota', model: 'Corolla' },
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {

        const car = this.cars.find(car => car.id === id);

        if (!car) {
            throw new NotFoundException('Car id is not found');
        }

        return car;
    }

    create(car: CreateCarDTO) {

        const newCar: Car = {
            id: uuid(),
            ...car
        }

        this.cars.push(newCar);

        return newCar;
    }

    updateCar(id: string, updateCarDTO: UpdateCarDTO) {

        let carDB = this.findOneById(id);

        if (updateCarDTO.id && updateCarDTO.id !== id) {
            throw new BadRequestException('Car id is not valid inside body');
        }

        this.cars = this.cars.map(car => car.id === id ? { ...carDB, ...updateCarDTO, id } : car);

        return carDB;
    }

    deleteCar(id: string) {
        const carDB = this.findOneById(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }

    fillWithSeedData(cars: Car[]) {
        this.cars = cars;
    }

}

import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRAND_SEED } from './db/brands.seed';
import { CARS_SEED } from './db/cars.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandsService
  ) {}

  populateDB() {

    this.carsService.fillWithSeedData( CARS_SEED );
    this.brandService.fillWithSeedData( BRAND_SEED );

    return 'Seed executed';
  }

}

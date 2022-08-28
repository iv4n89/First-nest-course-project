import { Brand } from '../../brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRAND_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'honda',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'toyota',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'opel',
        createdAt: new Date().getTime()
    },
]
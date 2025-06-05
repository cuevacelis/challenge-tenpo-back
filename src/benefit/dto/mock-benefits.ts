import { BenefitItemDto, BenefitType } from './benefit.dto';

export const mockBenefits: BenefitItemDto[] = [
  {
    name: 'Descuento en Starbucks',
    type: BenefitType.RESTAURANTS,
    discount: 20,
    description: '20% de descuento en cualquier bebida',
    validUntil: new Date('2024-12-31'),
    location: 'Todas las tiendas Starbucks',
    iconName: 'coffee',
  },
  {
    name: 'Descuento en Uber',
    type: BenefitType.TRANSPORT,
    discount: 15,
    description: '15% de descuento en viajes',
    validUntil: new Date('2024-12-31'),
    location: 'Ciudad de México',
    iconName: 'car',
  },
  {
    name: 'Entrada Cinepolis',
    type: BenefitType.ENTERTAINMENT,
    discount: 25,
    description: '25% de descuento en entradas',
    validUntil: new Date('2024-12-31'),
    location: 'Todas las salas Cinepolis',
    iconName: 'film',
  },
  {
    name: 'Descuento en Amazon',
    type: BenefitType.SHOPPING,
    discount: 10,
    description: '10% de descuento en compras',
    validUntil: new Date('2024-12-31'),
    location: 'Amazon.com.mx',
    iconName: 'shopping-cart',
  },
  {
    name: 'Descuento en Netflix',
    type: BenefitType.ENTERTAINMENT,
    discount: 30,
    description: '30% de descuento en suscripción',
    validUntil: new Date('2024-12-31'),
    location: 'Netflix.com',
    iconName: 'tv',
  },
];

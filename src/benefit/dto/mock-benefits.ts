import {
  BenefitItemDto,
  BenefitType,
  BenefitCategoryDto,
  BenefitColor,
} from './benefit.dto';

export const mockCategories: BenefitCategoryDto[] = [
  {
    id: 'all',
    name: BenefitType.ALL,
    displayName: 'Todos los beneficios',
    iconName: 'grid-3x3',
    color: BenefitColor.ALL,
  },
  {
    id: 'restaurants',
    name: BenefitType.RESTAURANTS,
    displayName: 'Restaurantes y Comida',
    iconName: 'utensils',
    color: BenefitColor.RESTAURANTS,
  },
  {
    id: 'shopping',
    name: BenefitType.SHOPPING,
    displayName: 'Compras y Retail',
    iconName: 'shopping-bag',
    color: BenefitColor.SHOPPING,
  },
  {
    id: 'transport',
    name: BenefitType.TRANSPORT,
    displayName: 'Transporte y Movilidad',
    iconName: 'car',
    color: BenefitColor.TRANSPORT,
  },
  {
    id: 'entertainment',
    name: BenefitType.ENTERTAINMENT,
    displayName: 'Entretenimiento',
    iconName: 'film',
    color: BenefitColor.ENTERTAINMENT,
  },
];

export const mockBenefits: BenefitItemDto[] = [
  {
    id: 'rest-001',
    name: 'Descuento en Starbucks',
    type: BenefitType.RESTAURANTS,
    discount: 20,
    description: '20% de descuento en cualquier bebida',
    validUntil: new Date('2024-12-31'),
    location: 'Todas las tiendas Starbucks',
    iconName: 'coffee',
    color: BenefitColor.RESTAURANTS,
  },
  {
    id: 'trans-001',
    name: 'Descuento en Uber',
    type: BenefitType.TRANSPORT,
    discount: 15,
    description: '15% de descuento en viajes',
    validUntil: new Date('2024-12-31'),
    location: 'Ciudad de México',
    iconName: 'car',
    color: BenefitColor.TRANSPORT,
  },
  {
    id: 'ent-001',
    name: 'Entrada Cinepolis',
    type: BenefitType.ENTERTAINMENT,
    discount: 25,
    description: '25% de descuento en entradas',
    validUntil: new Date('2024-12-31'),
    location: 'Todas las salas Cinepolis',
    iconName: 'film',
    color: BenefitColor.ENTERTAINMENT,
  },
  {
    id: 'shop-001',
    name: 'Descuento en Amazon',
    type: BenefitType.SHOPPING,
    discount: 10,
    description: '10% de descuento en compras',
    validUntil: new Date('2024-12-31'),
    location: 'Amazon.com.mx',
    iconName: 'shopping-cart',
    color: BenefitColor.SHOPPING,
  },
  {
    id: 'ent-002',
    name: 'Descuento en Netflix',
    type: BenefitType.ENTERTAINMENT,
    discount: 30,
    description: '30% de descuento en suscripción',
    validUntil: new Date('2024-12-31'),
    location: 'Netflix.com',
    iconName: 'tv',
    color: BenefitColor.ENTERTAINMENT,
  },
  {
    id: 'rest-002',
    name: "Descuento en McDonald's",
    type: BenefitType.RESTAURANTS,
    discount: 15,
    description: '15% de descuento en cualquier combo',
    validUntil: new Date('2025-03-31'),
    location: "Todas las sucursales McDonald's",
    iconName: 'utensils',
    color: BenefitColor.RESTAURANTS,
  },
  {
    id: 'shop-002',
    name: 'Cashback Liverpool',
    type: BenefitType.SHOPPING,
    discount: 8,
    description: '8% de cashback en compras online',
    validUntil: new Date('2025-01-31'),
    location: 'Liverpool.com.mx',
    iconName: 'credit-card',
    color: BenefitColor.SHOPPING,
  },
  {
    id: 'trans-002',
    name: 'Descuento DiDi',
    type: BenefitType.TRANSPORT,
    discount: 20,
    description: '20% de descuento en viajes express',
    validUntil: new Date('2024-12-31'),
    location: 'Área metropolitana',
    iconName: 'navigation',
    color: BenefitColor.TRANSPORT,
  },
  {
    id: 'ent-003',
    name: 'Spotify Premium',
    type: BenefitType.ENTERTAINMENT,
    discount: 50,
    description: '50% de descuento en suscripción anual',
    validUntil: new Date('2025-06-30'),
    location: 'Spotify.com',
    iconName: 'music',
    color: BenefitColor.ENTERTAINMENT,
  },
  {
    id: 'rest-003',
    name: "Descuento Domino's Pizza",
    type: BenefitType.RESTAURANTS,
    discount: 25,
    description: '25% de descuento en pizzas medianas y grandes',
    validUntil: new Date('2025-02-28'),
    location: 'Pedidos a domicilio',
    iconName: 'pizza',
    color: BenefitColor.RESTAURANTS,
  },
  {
    id: 'shop-003',
    name: 'Mercado Libre Plus',
    type: BenefitType.SHOPPING,
    discount: 12,
    description: '12% de descuento + envío gratis',
    validUntil: new Date('2025-04-30'),
    location: 'MercadoLibre.com.mx',
    iconName: 'package',
    color: BenefitColor.SHOPPING,
  },
  {
    id: 'trans-003',
    name: 'Gasolina Shell',
    type: BenefitType.TRANSPORT,
    discount: 5,
    description: '5% de descuento en combustible',
    validUntil: new Date('2025-01-15'),
    location: 'Estaciones Shell participantes',
    iconName: 'fuel',
    color: BenefitColor.TRANSPORT,
  },
  {
    id: 'ent-004',
    name: 'HBO Max',
    type: BenefitType.ENTERTAINMENT,
    discount: 40,
    description: '40% de descuento por 6 meses',
    validUntil: new Date('2025-05-31'),
    location: 'HBO Max México',
    iconName: 'play-circle',
    color: BenefitColor.ENTERTAINMENT,
  },
  {
    id: 'rest-004',
    name: 'Burger King',
    type: BenefitType.RESTAURANTS,
    discount: 18,
    description: '18% de descuento en Whopper',
    validUntil: new Date('2025-01-31'),
    location: 'Todas las sucursales',
    iconName: 'utensils',
    color: BenefitColor.RESTAURANTS,
  },
  {
    id: 'shop-004',
    name: 'Coppel',
    type: BenefitType.SHOPPING,
    discount: 15,
    description: '15% de descuento en electrónicos',
    validUntil: new Date('2025-03-15'),
    location: 'Tiendas Coppel y online',
    iconName: 'zap',
    color: BenefitColor.SHOPPING,
  },
  {
    id: 'trans-004',
    name: 'Metro CDMX',
    type: BenefitType.TRANSPORT,
    discount: 10,
    description: '10% de descuento en recargas',
    validUntil: new Date('2025-12-31'),
    location: 'Sistema de Transporte Colectivo',
    iconName: 'train',
    color: BenefitColor.TRANSPORT,
  },
  {
    id: 'ent-005',
    name: 'Disney Plus',
    type: BenefitType.ENTERTAINMENT,
    discount: 35,
    description: '35% de descuento en plan anual',
    validUntil: new Date('2025-07-31'),
    location: 'Disney Plus México',
    iconName: 'star',
    color: BenefitColor.ENTERTAINMENT,
  },
  {
    id: 'rest-005',
    name: 'KFC',
    type: BenefitType.RESTAURANTS,
    discount: 22,
    description: '22% de descuento en buckets familiares',
    validUntil: new Date('2025-02-14'),
    location: 'KFC delivery y sucursales',
    iconName: 'utensils',
    color: BenefitColor.RESTAURANTS,
  },
  {
    id: 'shop-005',
    name: 'Sears',
    type: BenefitType.SHOPPING,
    discount: 20,
    description: '20% de descuento en ropa y accesorios',
    validUntil: new Date('2025-04-15'),
    location: 'Sears México',
    iconName: 'shirt',
    color: BenefitColor.SHOPPING,
  },
  {
    id: 'trans-005',
    name: 'Rappi',
    type: BenefitType.TRANSPORT,
    discount: 12,
    description: '12% de descuento en delivery',
    validUntil: new Date('2025-03-31'),
    location: 'Zona metropolitana',
    iconName: 'truck',
    color: BenefitColor.TRANSPORT,
  },
  {
    id: 'rest-006',
    name: 'Descuento en Subway',
    type: BenefitType.RESTAURANTS,
    discount: 15,
    description: '15% de descuento en cualquier sub de 30cm',
    validUntil: new Date('2025-04-30'),
    location: 'Todas las sucursales Subway',
    iconName: 'sandwich',
    color: BenefitColor.RESTAURANTS,
  },
  {
    id: 'shop-006',
    name: 'Descuento en Best Buy',
    type: BenefitType.SHOPPING,
    discount: 12,
    description: '12% de descuento en electrónicos seleccionados',
    validUntil: new Date('2025-05-15'),
    location: 'Tiendas Best Buy y online',
    iconName: 'monitor',
    color: BenefitColor.SHOPPING,
  },
  {
    id: 'trans-006',
    name: 'Descuento en Cabify',
    type: BenefitType.TRANSPORT,
    discount: 18,
    description: '18% de descuento en viajes premium',
    validUntil: new Date('2025-03-31'),
    location: 'Ciudad de México y área metropolitana',
    iconName: 'car-front',
    color: BenefitColor.TRANSPORT,
  },
  {
    id: 'ent-006',
    name: 'Descuento en Prime Video',
    type: BenefitType.ENTERTAINMENT,
    discount: 25,
    description: '25% de descuento en suscripción anual',
    validUntil: new Date('2025-06-30'),
    location: 'Prime Video México',
    iconName: 'play-square',
    color: BenefitColor.ENTERTAINMENT,
  },
  {
    id: 'rest-007',
    name: 'Descuento en Toks',
    type: BenefitType.RESTAURANTS,
    discount: 20,
    description: '20% de descuento en platillos principales',
    validUntil: new Date('2025-04-15'),
    location: 'Todas las sucursales Toks',
    iconName: 'utensils',
    color: BenefitColor.RESTAURANTS,
  },
  {
    id: 'shop-007',
    name: 'Descuento en Palacio de Hierro',
    type: BenefitType.SHOPPING,
    discount: 15,
    description: '15% de descuento en ropa y accesorios',
    validUntil: new Date('2025-05-31'),
    location: 'Tiendas Palacio de Hierro',
    iconName: 'shopping-bag',
    color: BenefitColor.SHOPPING,
  },
  {
    id: 'trans-007',
    name: 'Descuento en Ecobici',
    type: BenefitType.TRANSPORT,
    discount: 30,
    description: '30% de descuento en membresía anual',
    validUntil: new Date('2025-12-31'),
    location: 'Sistema Ecobici CDMX',
    iconName: 'bike',
    color: BenefitColor.TRANSPORT,
  },
  {
    id: 'ent-007',
    name: 'Descuento en Apple Music',
    type: BenefitType.ENTERTAINMENT,
    discount: 40,
    description: '40% de descuento en suscripción familiar',
    validUntil: new Date('2025-07-31'),
    location: 'Apple Music México',
    iconName: 'music',
    color: BenefitColor.ENTERTAINMENT,
  },
  {
    id: 'rest-008',
    name: 'Descuento en Vips',
    type: BenefitType.RESTAURANTS,
    discount: 22,
    description: '22% de descuento en desayunos y comidas',
    validUntil: new Date('2025-05-15'),
    location: 'Todas las sucursales Vips',
    iconName: 'coffee',
    color: BenefitColor.RESTAURANTS,
  },
  {
    id: 'shop-008',
    name: 'Descuento en Office Depot',
    type: BenefitType.SHOPPING,
    discount: 10,
    description: '10% de descuento en artículos de oficina',
    validUntil: new Date('2025-06-30'),
    location: 'Tiendas Office Depot y online',
    iconName: 'briefcase',
    color: BenefitColor.SHOPPING,
  },
  {
    id: 'trans-008',
    name: 'Descuento en Metrobús',
    type: BenefitType.TRANSPORT,
    discount: 8,
    description: '8% de descuento en recargas',
    validUntil: new Date('2025-12-31'),
    location: 'Sistema Metrobús CDMX',
    iconName: 'bus',
    color: BenefitColor.TRANSPORT,
  },
  {
    id: 'ent-008',
    name: 'Descuento en YouTube Premium',
    type: BenefitType.ENTERTAINMENT,
    discount: 35,
    description: '35% de descuento en suscripción familiar',
    validUntil: new Date('2025-08-31'),
    location: 'YouTube Premium México',
    iconName: 'youtube',
    color: BenefitColor.ENTERTAINMENT,
  },
  {
    id: 'rest-009',
    name: 'Descuento en Sanborns',
    type: BenefitType.RESTAURANTS,
    discount: 15,
    description: '15% de descuento en restaurante y cafetería',
    validUntil: new Date('2025-06-15'),
    location: 'Todas las sucursales Sanborns',
    iconName: 'coffee',
    color: BenefitColor.RESTAURANTS,
  },
  {
    id: 'shop-009',
    name: 'Descuento en Home Depot',
    type: BenefitType.SHOPPING,
    discount: 12,
    description: '12% de descuento en herramientas y jardín',
    validUntil: new Date('2025-07-31'),
    location: 'Tiendas Home Depot',
    iconName: 'hammer',
    color: BenefitColor.SHOPPING,
  },
  {
    id: 'trans-009',
    name: 'Descuento en Trolebús',
    type: BenefitType.TRANSPORT,
    discount: 10,
    description: '10% de descuento en tarjeta recargable',
    validUntil: new Date('2025-12-31'),
    location: 'Sistema Trolebús CDMX',
    iconName: 'bus-front',
    color: BenefitColor.TRANSPORT,
  },
  {
    id: 'ent-009',
    name: 'Descuento en Paramount+',
    type: BenefitType.ENTERTAINMENT,
    discount: 45,
    description: '45% de descuento en suscripción anual',
    validUntil: new Date('2025-09-30'),
    location: 'Paramount+ México',
    iconName: 'play-circle',
    color: BenefitColor.ENTERTAINMENT,
  },
  {
    id: 'rest-010',
    name: "Descuento en Italianni's",
    type: BenefitType.RESTAURANTS,
    discount: 25,
    description: '25% de descuento en pasta y pizza',
    validUntil: new Date('2025-07-15'),
    location: "Todas las sucursales Italianni's",
    iconName: 'pizza',
    color: BenefitColor.RESTAURANTS,
  },
  {
    id: 'shop-010',
    name: 'Descuento en Costco',
    type: BenefitType.SHOPPING,
    discount: 5,
    description: '5% de descuento en membresía ejecutiva',
    validUntil: new Date('2025-08-31'),
    location: 'Tiendas Costco',
    iconName: 'shopping-cart',
    color: BenefitColor.SHOPPING,
  },
  {
    id: 'trans-010',
    name: 'Descuento en Tren Ligero',
    type: BenefitType.TRANSPORT,
    discount: 12,
    description: '12% de descuento en tarjeta recargable',
    validUntil: new Date('2025-12-31'),
    location: 'Sistema Tren Ligero CDMX',
    iconName: 'train-front',
    color: BenefitColor.TRANSPORT,
  },
  {
    id: 'ent-010',
    name: 'Descuento en Star+',
    type: BenefitType.ENTERTAINMENT,
    discount: 30,
    description: '30% de descuento en suscripción anual',
    validUntil: new Date('2025-10-31'),
    location: 'Star+ México',
    iconName: 'star',
    color: BenefitColor.ENTERTAINMENT,
  },
];

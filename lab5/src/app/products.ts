export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    rating: number;
    kaspiLink: string;
    likes: number;
    category: string;
}

export const products = [
  {
    id: 1,
    name: 'Наушники Apple AirPods 2nd generation',
    price: 50958,
    description: 'белый',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h12/hc8/84594232688670.jpg?format=gallery-large',
    rating: 5.0,
    kaspiLink: 'https://kaspi.kz/shop/p/apple-airpods-2nd-generation-belyi-114927908/?c=750000000',
    likes: 0,
    category: 'apple'
  },
  {
    id: 2,
    name: 'Наушники Apple AirPods 3',
    price: 82998,
    description: 'белый',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hda/hc7/64341967994910.jpg?format=gallery-medium',
    rating: 5.0,
    kaspiLink: 'https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000',
    likes: 0,
    category: 'apple'
  },
  {
    id: 3,
    name: 'Наушники Marshall Major IV',
    price: 65998,
    description: 'черный',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h21/64344048762910.jpg?format=gallery-medium',
    rating: 4.8,
    kaspiLink: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000',
    likes: 0,
    category: 'marshall'
  },
  {
    id: 4,
    name: 'Наушники Sony WH-1000XM4',
    price: 119889,
    description: 'черный',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb9/h06/63894367535134.jpg?format=gallery-medium',
    rating: 5.0,
    kaspiLink: 'https://kaspi.kz/shop/p/sony-wh-1000xm4-chernyi-100471997/?c=750000000',
    likes: 0,
    category: 'sony'
  },
  {
    id: 5,
    name: 'Наушники Samsung Galaxy Buds2 Pro (SM-R510NZAACIS)',
    price: 54569 ,
    description: 'черный',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc2/h75/64421533548574.jpg?format=gallery-medium',
    rating: 4.7,
    kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-sm-r510nzaacis-chernyi-106128763/?c=750000000',
    likes: 0,
    category: 'samsung'
  },
  {
    id: 6,
    name: 'Наушники Xiaomi Redmi Buds 4 Lite',
    price: 4989,
    description: 'черный',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h3a/hd9/79723782602782.jpg?format=gallery-large',
    rating: 4.3,
    kaspiLink: 'https://kaspi.kz/shop/p/xiaomi-redmi-buds-4-lite-chernyi-109723597/?c=750000000',
    likes: 0,
    category: 'xiaomi'
  },
  {
    id: 7,
    name: 'Наушники Apple AirPods Max',
    price: 276990,
    description: 'серебристый',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h97/h0d/64141045628958.jpg?format=gallery-medium',
    rating: 4.8,
    kaspiLink: 'https://kaspi.kz/shop/p/apple-airpods-max-serebristyi-100949286/?c=750000000',
    likes: 0,
    category: 'apple'
  },
  {
    id: 8,
    name: 'Наушники JBL Tune 510BT',
    price: 17799,
    description: 'белый',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/h20/64237178093598.jpg?format=gallery-medium',
    rating: 4.4,
    kaspiLink: 'https://kaspi.kz/shop/p/jbl-tune-510bt-belyi-101420096/?c=750000000',
    likes: 0,
    category: 'JBL'
  },
  {
    id: 9,
    name: 'Наушники Sony WH-CH520',
    price: 22885,
    description: 'черный',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h4b/hdc/81080678875166.jpg?format=gallery-medium',
    rating: 4.7,
    kaspiLink: 'https://kaspi.kz/shop/p/sony-wh-ch520-chernyi-110665625/?c=750000000',
    likes:0,
    category: 'sony'
  },
  {
    id: 10,
    name: 'Наушники JBL Tune 125BT',
    price: 16050,
    description: 'черный',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb6/hfd/64120178606110.jpg?format=gallery-medium',
    rating: 3.2,
    kaspiLink: 'https://kaspi.kz/shop/p/jbl-tune-125bt-chernyi-101278479/?c=750000000',
    likes:0,
    category: 'JBL'
  }
];

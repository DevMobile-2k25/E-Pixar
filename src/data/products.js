import camisa_sa_branca from '@/data/images/products/camisa_sa_branca.jpeg'
import camisa_sa_preta from '@/data/images/products/camisa_sa_preta.jpeg'
import camisa_buzz from '@/data/images/products/camisa_buzz.jpeg'
import camisa_woody from '@/data/images/products/camisa_woody.jpeg'
import camisa_jessie from '@/data/images/products/camisa_jessie.jpeg'
import camisa_mike from '@/data/images/products/camisa_mike.jpeg'
import camisa_sully from '@/data/images/products/camisa_sully.jpeg'
import camisa_boo from '@/data/images/products/camisa_boo.jpeg'

export const products = [
    {
        id: 1,
        name: 'Camiseta Manga Longa Monstros S.a, Monsters As, Pixar',
        price: '100',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cover: camisa_sa_preta,
        type: 't-shirt',
        variants: [
            {
                color: 'black',
                image: camisa_sa_preta,
            },
            {
                color: 'white',
                image: camisa_sa_branca,
            },
        ],
    },

    {
        id: 2,
        name: 'Camisa Camiseta Dryfit Premium Desenho Toy Story Personagem Xerife Woody Jessie Vaqueira buzz lightyear',
        price: '100',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cover: camisa_jessie,
        type: 't-shirt',
        variants: [
            {
                color: 'white',
                image: camisa_jessie,
            },
            {
                color: 'brown',
                image: camisa_woody,
            },
            {
                color: 'green',
                image: camisa_buzz,
            },
        ],
    },

    {
        id: 3,
        name: 'Camiseta Personagens Monstros SA Parte 1',
        price: '100',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cover: camisa_boo,
        type: 't-shirt',
        variants: [
            {
                color: 'pink',
                image: camisa_boo,
            },
            {
                color: 'blue',
                image: camisa_sully,
            },
            {
                color: 'green',
                image: camisa_mike,
            },
        ],
    },
]

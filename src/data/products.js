import camisa_sa_branca from '@/data/images/products/camisa_sa_branca.jpeg'
import camisa_sa_preta from '@/data/images/products/camisa_sa_preta.jpeg'
import camisa_buzz from '@/data/images/products/camisa_buzz.jpeg'
import camisa_woody from '@/data/images/products/camisa_woody.jpeg'
import camisa_jessie from '@/data/images/products/camisa_jessie.jpeg'
import camisa_mike from '@/data/images/products/camisa_mike.jpeg'
import camisa_sully from '@/data/images/products/camisa_sully.jpeg'
import camisa_boo from '@/data/images/products/camisa_boo.jpeg'
import tiara_rato1 from '@/data/images/products/tiara_rato1.jpeg'
import tiara_rato2 from '@/data/images/products/tiara_rato2.jpeg'
import bone_mqueen_beje from '@/data/images/products/bone_mqueen_beje.jpeg'
import bone_mqueen_blue from '@/data/images/products/bone_mqueen_blue.jpeg'
import bone_mqueen_red from '@/data/images/products/bone_mqueen_red.jpeg'
import tiara_toy_buzz from '@/data/images/products/tiara_toy_buzz.jpeg'
import tiara_toy_woody from '@/data/images/products/tiara_toy_woody.jpeg'
import tiara_toy_alien from '@/data/images/products/tiara_toy_alien.jpeg'
import meia_toy_woody from '@/data/images/products/meia_toy_woody.jpeg'
import meia_toy_buzz from '@/data/images/products/meia_toy_buzz.jpeg'
import meia_toy_random from '@/data/images/products/meia_toy_random.jpeg'
import meia_toy_alien from '@/data/images/products/meia_toy_alien.jpeg'

import bone_sa_uni from '@/data/images/products/bone_sa_uni.jpeg'
import bone_sa_mike from '@/data/images/products/bone_sa_mike.jpeg'
import bone_sa_sulley from '@/data/images/products/bone_sa_sulley.jpeg'

import camisa_wall_white from '@/data/images/products/camisa_wall_white.jpeg'
import camisa_wall_greenlime from '@/data/images/products/camisa_wall_greenlime.jpeg'
import camisa_wall_blue from '@/data/images/products/camisa_wall_blue.jpeg'
import camisa_wall_yellow from '@/data/images/products/camisa_wall_yellow.jpeg'
import camisa_wall_green from '@/data/images/products/camisa_wall_green.jpeg'

import meia_diver_ans from '@/data/images/products/meia_diver_ans.jpeg'
import meia_diver_tris from '@/data/images/products/meia_diver_tris.jpeg'
import meia_diver_nojo from '@/data/images/products/meia_diver_nojo.jpeg'
import meia_diver_alegria from '@/data/images/products/meia_diver_alegria.jpeg'

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

  {
    id: 4,
    name: 'Tiara Ratatoullie adulto',
    price: '100',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    cover: tiara_rato1,
    type: 'aceessory',
    variants: [
      {
        color: 'blue',
        image: tiara_rato1,
      },
      {
        color: 'orange',
        image: tiara_rato2,
      },
    ],
  },

  {
    id: 5,
    name: 'Boné Rust Eze Carros Excelente Qualidade',
    price: '100',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    cover: bone_mqueen_red,
    type: 'head',
    variants: [
      {
        color: 'red',
        image: bone_mqueen_red,
      },
      {
        color: 'blue',
        image: bone_mqueen_blue,
      },
      {
        color: 'beje',
        image: bone_mqueen_beje,
      },
    ],
  },
  {
    id: 6,
    name: 'Tiara de orelha para adultos - Toy Story',
    price: '100',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    cover: tiara_toy_buzz,
    type: 'acessory',
    variants: [
      {
        color: 'blue',
        image: tiara_toy_buzz,
      },
      {
        color: 'brown',
        image: tiara_toy_woody,
      },
      {
        color: 'green',
        image: tiara_toy_alien,
      },
    ],
  },
  {
    id: 7,
    name: 'Meias infantis divertidas Toy Story',
    price: '100',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    cover: meia_toy_woody,
    type: 'socks',
    variants: [
      {
        color: 'blue',
        image: meia_toy_buzz,
      },
      {
        color: 'brown',
        image: meia_toy_woody,
      },
      {
        color: 'green',
        image: meia_toy_alien,
      },
      {
        color: 'yellow',
        image: meia_toy_random,
      },
    ],
  },
  {
    id: 8,
    name: 'Boné Monstros S.A',
    price: '100',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    cover: bone_sa_uni,
    type: 'head',
    variants: [
      {
        color: 'green',
        image: bone_sa_uni,
      },
      {
        color: 'blue',
        image: bone_sa_mike,
      },
      {
        color: 'purple',
        image: bone_sa_sulley,
      },
    ],
  },
  {
    id: 9,
    name: 'Camiseta Manga Longa Wall-E Pixar',
    price: '100',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    cover: camisa_wall_white,
    type: 't-shirt',
    variants: [
      {
        color: 'white',
        image: camisa_wall_white,
      },
      {
        color: 'greenlime',
        image: camisa_wall_greenlime,
      },
      {
        color: 'blue',
        image: camisa_wall_blue,
      },
      {
        color: 'yellow',
        image: camisa_wall_yellow,
      },
      {
        color: 'green',
        image: camisa_wall_green,
      },
    ],
  },
  {
    id: 10,
    name: 'Meias infantis divertidas Divertidamente',
    price: '100',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    cover: meia_diver_ans,
    type: 'socks',
    variants: [
      {
        color: 'blue',
        image: meia_diver_ans,
      },
      {
        color: 'green',
        image: meia_diver_alegria,
      },
      {
        color: 'yellow',
        image: meia_diver_nojo,
      },
      {
        color: 'pink',
        image: meia_diver_tris,
      },
    ],
  },
  {
    id: 11,
    name: "Camiseta Mommy's Little Monster - Mike Wazowski",
    price: '100',
    description:
      'Camiseta branca com estampa do Mike Wazowski e a frase "Mommy\'s Little Monster".',
    cover:
      'https://images.tcdn.com.br/img/img_prod/460977/camiseta_unissex_mommy_s_little_monster_monstrinho_da_mamae_mike_wazowski_monstros_s_a_branco_cd_118417_variacao_41333_1_dee1bfce24be8c9835bae2b00003d436.jpg',
    type: 't-shirt',
    variants: [
      {
        color: 'white',
        image:
          'https://images.tcdn.com.br/img/img_prod/460977/camiseta_unissex_mommy_s_little_monster_monstrinho_da_mamae_mike_wazowski_monstros_s_a_branco_cd_118417_variacao_41333_1_dee1bfce24be8c9835bae2b00003d436.jpg',
      },
    ],
  },
  {
    id: 12,
    name: 'Camiseta Monsters University - Sulley e Mike',
    price: '100',
    description:
      'Camiseta branca com estampa dos personagens Sulley e Mike da Universidade Monstros.',
    cover:
      'https://images.mont.ink/nmt/estampas/montink2.lojavirtualnuvem.com.br/Cinza-mescla_88349038.png',
    type: 't-shirt',
    variants: [
      {
        color: 'white',
        image:
          'https://images.mont.ink/nmt/estampas/montink2.lojavirtualnuvem.com.br/Cinza-mescla_88349038.png',
      },
    ],
  },
  {
    id: 13,
    name: 'Camiseta Mike Monstros S.A.',
    price: '100',
    description: 'Camiseta verde com estampa do rosto do Mike Wazowski.',
    cover: 'https://img.elo7.com.br/product/685x685/2A49069/camiseta-mike-monstros-sa.jpg',
    type: 't-shirt',
    variants: [
      {
        color: 'white',
        image: 'https://img.elo7.com.br/product/685x685/2A49069/camiseta-mike-monstros-sa.jpg',
      },
    ],
  },

  {
    id: 14,
    name: "Camiseta Toy Story - You've Got a Friend in Me",
    price: '100',
    description:
      'Camiseta preta com estampa dos personagens principais de Toy Story e a frase "You\'ve Got a Friend in Me".',
    cover:
      'https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C91tw8UOSQ7L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466_.png',
    type: 't-shirt',
    variants: [
      {
        color: 'white',
        image:
          'https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C91tw8UOSQ7L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466_.png',
      },
    ],
  },
  {
    id: 15,
    name: 'Camiseta Toy Story - Woody e Buzz',
    price: '100',
    description: 'Camiseta branca com estampa dos personagens Woody e Buzz Lightyear.',
    cover: 'https://m.media-amazon.com/images/I/61a9qDfVNWL._AC_SX569_.jpg',
    type: 't-shirt',
    variants: [
      {
        color: 'white',
        image: 'https://m.media-amazon.com/images/I/61a9qDfVNWL._AC_SX569_.jpg',
      },
    ],
  },
  {
    id: 16,
    name: 'Camiseta Toy Story - Família Aniversário',
    price: '100',
    description: 'Camiseta personalizada para festas de aniversário com tema Toy Story.',
    cover: 'https://i.etsystatic.com/27001965/r/il/b064f5/4712312624/il_794xN.4712312624_d69m.jpg',
    type: 't-shirt',
    variants: [
      {
        color: 'white',
        image:
          'https://i.etsystatic.com/27001965/r/il/b064f5/4712312624/il_794xN.4712312624_d69m.jpg',
      },
    ],
  },

  {
    id: 17,
    name: 'Camiseta Disney Pixar WALL-E Movie Logo',
    price: '100',
    description: 'Camiseta com estampa do logo do filme WALL-E da Disney Pixar.',
    cover:
      'https://m.media-amazon.com/images/I/A1dbsmzbGeL._CLa%7C2140%2C2000%7C51s6y-8LuML.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466_.png',
    type: 't-shirt',
    variants: [
      {
        color: 'white',
        image:
          'https://m.media-amazon.com/images/I/A1dbsmzbGeL._CLa%7C2140%2C2000%7C51s6y-8LuML.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466_.png',
      },
    ],
  },
  {
    id: 19,
    name: 'Camiseta WALL-E Robot',
    price: '100',
    description: 'Camiseta com estampa do robô WALL-E.',
    cover:
      'https://i.etsystatic.com/28201698/c/1612/1282/186/0/il/602090/3104899100/il_680x540.3104899100_2nsq.jpg',
    type: 't-shirt',
    variants: [
      {
        color: 'white',
        image:
          'https://i.etsystatic.com/28201698/c/1612/1282/186/0/il/602090/3104899100/il_680x540.3104899100_2nsq.jpg',
      },
    ],
  },
]

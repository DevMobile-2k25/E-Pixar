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
    name: "Camiseta Manga Longa Monstros S.a, Monsters As, Pixar",
    price: "100",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cover: camisa_sa_preta,
    type: "t-shirt",
    variants: [
      {
        color: "black",
        image: camisa_sa_preta
      },
      {
        color: "white",
        image: camisa_sa_branca
      }
    ],
    filmId: 3
  },
  {
    id: 2,
    name: "Camisa Camiseta Dryfit Premium Desenho Toy Story Personagem Xerife Woody Jessie Vaqueira buzz lightyear",
    price: "100",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cover: camisa_jessie,
    type: "t-shirt",
    variants: [
      {
        color: "white",
        image: camisa_jessie
      },
      {
        color: "brown",
        image: camisa_woody
      },
      {
        color: "green",
        image: camisa_buzz
      }
    ],
    filmId: 6
  },
  {
    id: 3,
    name: "Camiseta Personagens Monstros SA Parte 1",
    price: "100",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cover: camisa_boo,
    type: "t-shirt",
    variants: [
      {
        color: "pink",
        image: camisa_boo
      },
      {
        color: "blue",
        image: camisa_sully
      },
      {
        color: "green",
        image: camisa_mike
      }
    ],
    filmId: 3
  },
  {
    id: 4,
    name: "Tiara Ratatoullie adulto",
    price: "100",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cover: tiara_rato1,
    type: "aceessory",
    variants: [
      {
        color: "blue",
        image: tiara_rato1
      },
      {
        color: "orange",
        image: tiara_rato2
      }
    ],
    filmId: 7
  },
  {
    id: 5,
    name: "Boné Rust Eze Carros Excelente Qualidade",
    price: "100",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cover: bone_mqueen_red,
    type: "head",
    variants: [
      {
        color: "red",
        image: bone_mqueen_red
      },
      {
        color: "blue",
        image: bone_mqueen_blue
      },
      {
        color: "beje",
        image: bone_mqueen_beje
      }
    ],
    filmId: 8
  },
  {
    id: 6,
    name: "Tiara de orelha para adultos - Toy Story",
    price: "100",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cover: tiara_toy_buzz,
    type: "acessory",
    variants: [
      {
        color: "blue",
        image: tiara_toy_buzz
      },
      {
        color: "brown",
        image: tiara_toy_woody
      },
      {
        color: "green",
        image: tiara_toy_alien
      }
    ],
    filmId: 6
  },
  {
    id: 7,
    name: "Meias infantis divertidas Toy Story",
    price: "100",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cover: meia_toy_woody,
    type: "socks",
    variants: [
      {
        color: "blue",
        image: meia_toy_buzz
      },
      {
        color: "brown",
        image: meia_toy_woody
      },
      {
        color: "green",
        image: meia_toy_alien
      },
      {
        color: "yellow",
        image: meia_toy_random
      }
    ],
    filmId: 6
  },
  {
    id: 8,
    name: "Boné Monstros S.A",
    price: "100",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cover: bone_sa_uni,
    type: "head",
    variants: [
      {
        color: "green",
        image: bone_sa_uni
      },
      {
        color: "blue",
        image: bone_sa_mike
      },
      {
        color: "purple",
        image: bone_sa_sulley
      }
    ],
    filmId: 3
  },
  {
    id: 9,
    name: "Camiseta Manga Longa Wall-E Pixar",
    price: "100",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cover: camisa_wall_white,
    type: "t-shirt",
    variants: [
      {
        color: "white",
        image: camisa_wall_white
      },
      {
        color: "greenlime",
        image: camisa_wall_greenlime
      },
      {
        color: "blue",
        image: camisa_wall_blue
      },
      {
        color: "yellow",
        image: camisa_wall_yellow
      },
      {
        color: "green",
        image: camisa_wall_green
      }
    ],
    filmId: 4
  },
  {
    id: 10,
    name: "Meias infantis divertidas Divertidamente",
    price: "100",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cover: meia_diver_ans,
    type: "socks",
    variants: [
      {
        color: "blue",
        image: meia_diver_ans
      },
      {
        color: "green",
        image: meia_diver_alegria
      },
      {
        color: "yellow",
        image: meia_diver_nojo
      },
      {
        color: "pink",
        image: meia_diver_tris
      }
    ],
    filmId: 5
  },
  {
    id: 11,
    name: "Camiseta Mommy's Little Monster - Mike Wazowski",
    price: "100",
    description: "Camiseta branca com estampa do Mike Wazowski e a frase \"Mommy's Little Monster\".",
    cover: "https://images.tcdn.com.br/img/img_prod/460977/camiseta_unissex_mommy_s_little_monster_monstrinho_da_mamae_mike_wazowski_monstros_s_a_branco_cd_118417_variacao_41333_1_dee1bfce24be8c9835bae2b00003d436.jpg",
    type: "t-shirt",
    variants: [
      {
        color: "white",
        image: "https://images.tcdn.com.br/img/img_prod/460977/camiseta_unissex_mommy_s_little_monster_monstrinho_da_mamae_mike_wazowski_monstros_s_a_branco_cd_118417_variacao_41333_1_dee1bfce24be8c9835bae2b00003d436.jpg"
      }
    ],
    filmId: 3
  },
  {
    id: 12,
    name: "Camiseta Monsters University - Sulley e Mike",
    price: "100",
    description: "Camiseta branca com estampa dos personagens Sulley e Mike da Universidade Monstros.",
    cover: "https://images.mont.ink/nmt/estampas/montink2.lojavirtualnuvem.com.br/Cinza-mescla_88349038.png",
    type: "t-shirt",
    variants: [
      {
        color: "white",
        image: "https://images.mont.ink/nmt/estampas/montink2.lojavirtualnuvem.com.br/Cinza-mescla_88349038.png"
      }
    ],
    filmId: 3
  },
  {
    id: 13,
    name: "Camiseta Mike Monstros S.A.",
    price: "100",
    description: "Camiseta verde com estampa do rosto do Mike Wazowski.",
    cover: "https://img.elo7.com.br/product/685x685/2A49069/camiseta-mike-monstros-sa.jpg",
    type: "t-shirt",
    variants: [
      {
        color: "white",
        image: "https://img.elo7.com.br/product/685x685/2A49069/camiseta-mike-monstros-sa.jpg"
      }
    ],
    filmId: 3
  },
  {
    id: 14,
    name: "Camiseta Toy Story - You've Got a Friend in Me",
    price: "100",
    description: "Camiseta preta com estampa dos personagens principais de Toy Story e a frase \"You've Got a Friend in Me\".",
    cover: "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140,2000%7C91tw8UOSQ7L.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0_AC_SX466_.png",
    type: "t-shirt",
    variants: [
      {
        color: "white",
        image: "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140,2000%7C91tw8UOSQ7L.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0_AC_SX466_.png"
      }
    ],
    filmId: 6
  },
  {
    id: 15,
    name: "Camiseta Toy Story - Woody e Buzz",
    price: "100",
    description: "Camiseta branca com estampa dos personagens Woody e Buzz Lightyear.",
    cover: "https://m.media-amazon.com/images/I/61a9qDfVNWL._AC_SX569_.jpg",
    type: "t-shirt",
    variants: [
      {
        color: "white",
        image: "https://m.media-amazon.com/images/I/61a9qDfVNWL._AC_SX569_.jpg"
      }
    ],
    filmId: 6
  },
  {
    id: 16,
    name: "Camiseta Toy Story - Família Aniversário",
    price: "100",
    description: "Camiseta personalizada para festas de aniversário com tema Toy Story.",
    cover: "https://i.etsystatic.com/27001965/r/il/b064f5/4712312624/il_794xN.4712312624_d69m.jpg",
    type: "t-shirt",
    variants: [
      {
        color: "white",
        image: "https://i.etsystatic.com/27001965/r/il/b064f5/4712312624/il_794xN.4712312624_d69m.jpg"
      }
    ],
    filmId: 6
  },
  {
    id: 17,
    name: "Camiseta Disney Pixar WALL-E Movie Logo",
    price: "100",
    description: "Camiseta com estampa do logo do filme WALL-E da Disney Pixar.",
    cover: "https://m.media-amazon.com/images/I/A1dbsmzbGeL._CLa%7C2140,2000%7C51s6y-8LuML.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0_AC_SX466_.png",
    type: "t-shirt",
    variants: [
      {
        color: "white",
        image: "https://m.media-amazon.com/images/I/A1dbsmzbGeL._CLa%7C2140,2000%7C51s6y-8LuML.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0_AC_SX466_.png"
      }
    ],
    filmId: 4
  },
  {
    id: 18,
    name: "Camiseta WALL-E Robot",
    price: "100",
    description: "Camiseta com estampa do robô WALL-E.",
    cover: "https://i.etsystatic.com/28201698/c/1612/1282/186/0/il/602090/3104899100/il_680x540.3104899100_2nsq.jpg",
    type: "t-shirt",
    variants: [
      {
        color: "white",
        image: "https://i.etsystatic.com/28201698/c/1612/1282/186/0/il/602090/3104899100/il_680x540.3104899100_2nsq.jpg"
      }
    ],
    filmId: 4
  },
  {
    id: 19,
    name: 'Figura Pixar Monstros SA Randal',
    price: '100',
    description: 'Figura de ação Monstros SA, personagem Randall.',
    cover:
      'https://th.bing.com/th/id/OIP.j6KW4yvuboEjrX9vVPuxxQHaFj?w=242&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    type: 'toy',
    variants: [
      {
        color: 'white',
        image:
          'https://th.bing.com/th/id/OIP.j6KW4yvuboEjrX9vVPuxxQHaFj?w=242&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      },
    ],
    filmId: 3
  },
  {
    id: 20,
    name: 'Toy Story 4 Disney Pixar Figuras Com Acessórios De Filme Woody',
    price: '100',
    description: 'Figura de ação Toy Story 4, personagem Woody com acessórios.',
    cover:
      'https://th.bing.com/th/id/OIP.RumO1qmInNtAEFqjFoW0jAHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    type: 'toy',
    variants: [
      {
        color: 'white',
        image:
          'https://th.bing.com/th/id/OIP.RumO1qmInNtAEFqjFoW0jAHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      },
    ],
    filmId: 6
  },
  {
    id: 21,
    name: 'Sapato Crocks Carros Relâmpago Mcqueen',
    price: '100',
    description: 'Sapato Crocks do filme carros do relampago Mcqueen.',
    cover:
      'https://ae-pic-a1.aliexpress-media.com/kf/S89310556f61141a2b41ebe8abec479dfc.jpg_960x960q75.jpg_.avif',
    type: 'shoe',
    variants: [
      {
        color: 'white',
        image:
          'https://ae-pic-a1.aliexpress-media.com/kf/S89310556f61141a2b41ebe8abec479dfc.jpg_960x960q75.jpg_.avif',
      },
    ],
    filmId: 8
  },
  {
    id: 22,
    name: 'Pixar Turning Red Deluxe Figure Play Set : Toys & Games',
    price: '100',
    description: 'Figuras Pixar Turning Red.',
    cover:
      'https://th.bing.com/th/id/OIP.GhvihnlnF1kO7hwaaoaCpAHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    type: 'toy',
    variants: [
      {
        color: 'white',
        image:
          'https://th.bing.com/th/id/OIP.GhvihnlnF1kO7hwaaoaCpAHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      },
    ],
    filmId: 1
  },
  {
    id: 23,
    name: 'Camiseta de Pixar Turning Red RPG Red Panda Girl Mei',
    price: '100',
    description: 'Camiseta com estampa da Mei, Turning Red.',
    cover:
      'https://th.bing.com/th/id/OIP.zXK0bUDj6eHZlniqenQ4BwHaHh?w=204&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    type: 't-shirt',
    variants: [
      {
        color: 'black',
        image:
          'https://th.bing.com/th/id/OIP.zXK0bUDj6eHZlniqenQ4BwHaHh?w=204&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      },
    ],
    filmId: 1
  },
  {
    id: 24,
    name: 'Pixar Up figure',
    price: '100',
    description: 'Figura da Pixar UP - Altas aventuras.',
    cover:
      'https://th.bing.com/th/id/OIP.NsiZdppmbVd5DAdozmMREAHaIK?rs=1&pid=ImgDetMain',
    type: 'toy',
    variants: [
      {
        color: 'white',
        image:
          'https://th.bing.com/th/id/OIP.NsiZdppmbVd5DAdozmMREAHaIK?rs=1&pid=ImgDetMain',
      },
    ],
    filmId: 4
  },
  {
    id: 25,
    name: 'Pixar Inside Out Yearbook T-Shirt - BLACK',
    price: '100',
    description: 'Camisa estampada Divertidamente - Emotional Adventures preto.',
    cover:
      'https://cdn.media.amplience.net/s/hottopic/13718174_hi?$productMainDesktop$',
    type: 't-shirt',
    variants: [
      {
        color: 'black',
        image:
          'https://cdn.media.amplience.net/s/hottopic/13718174_hi?$productMainDesktop$',
      },
    ],
    filmId: 5
  },
];

type PetType = 'dog' | 'cat' | 'waterAnimal' | 'reptile';

type Pet = {
  type: PetType,
  image: string,
  name: string,
  color: string,
  sex: 'Male' | 'Female'
}
const data: Pet[] = [
    {
        type: 'dog',
        image: 'pastor-alemao.jpg',
        name: 'Pastor-alemão',
        color: 'Yellow and black',
        sex: 'Male'
    },
    {
        type: 'dog',
        image: 'labrador.jpg',
        name: 'Labrador-retriever',
        color: 'White',
        sex: 'Male'
    },
    {
        type: 'dog',
        image: 'zwergspitz.jpg',
        name: 'Zwergspitz',
        color: 'Yellow',
        sex: 'Female'
    },
    {
        type: 'dog',
        image: 'husky.jpg',
        name: 'Husky Siberiano',
        color: 'Black and white',
        sex: 'Male'
    },
    {
        type: 'dog',
        image: 'golden.jpg',
        name: 'Golden Retriever',
        color: 'Yellow',
        sex: 'Male'
    },
    {
        type: 'dog',
        image: 'poodle.jpg',
        name: 'Poodle',
        color: 'Branco',
        sex: 'Female'
    },
    {
        type: 'dog',
        image: 'bulldog.jpg',
        name: 'Bulldog',
        color: 'White and yellow',
        sex: 'Male'
    },
    {
        type: 'cat',
        image: 'persa.jpg',
        name: 'Persa',
        color: 'Yellow',
        sex: 'Male'
    },
    {
        type: 'cat',
        image: 'mainecoon.jpg',
        name: 'Maine Coon',
        color: 'lack and white',
        sex: 'Male'
    },
    {
        type: 'cat',
        image: 'bengal.jpg',
        name: 'Bengal',
        color: 'Black, white and yellow',
        sex: 'Female'
    },
    {
        type: 'cat',
        image: 'siames.jpg',
        name: 'Siamês',
        color: 'Yellow and black',
        sex: 'Male'
    },
    {
        type: 'cat',
        image: 'sphynx.jpg',
        name: 'Sphynx',
        color: 'White',
        sex: 'Male'
    },
    {
        type: 'waterAnimal',
        image: 'neon.jpg',
        name: 'Tetra Neon',
        color: 'Red and blue',
        sex: 'Male'
    },
    {
        type: 'waterAnimal',
        image: 'matogrosso.jpg',
        name: 'Mato Grosso',
        color: 'Orange',
        sex: 'Male'
    },
    {
        type: 'waterAnimal',
        image: 'limpavidro.jpg',
        name: 'Limpa Vidro',
        color: 'Green and white',
        sex: 'Male'
    },
    {
        type: 'waterAnimal',
        image: 'tanictis.jpg',
        name: 'Tanictis',
        color: 'Red',
        sex: 'Male'
    },
    {
        type: 'waterAnimal',
        image: 'acara.jpg',
        name: 'Acará Bandeira',
        color: 'Black',
        sex: 'Male'
    },
    {
        type: 'reptile',
        image: 'red_headed_rock_agama.jpg',
        name: 'Red-Headed Rock Agama',
        color: 'Red and blue',
        sex: 'Male'
    },
    {
        type: 'reptile',
        image: 'beard_dragon.jpg',
        name: 'Beard Dragon',
        color: 'Yellow',
        sex: 'Male'
    },
    {
        type: 'reptile',
        image: 'camaleo_do_iemen.jpeg',
        name: 'Yemen Chameleon',
        color: 'Yellow, green and black',
        sex: 'Female'
    },
    {
        type: 'reptile',
        image: 'hawksbill_turtle.jpg',
        name: 'Hawksbill Turtle',
        color: 'Brown',
        sex: 'Male'
    }
]

export const Pet = {
  getAll: () => {
      return data;
  },
  getFromType: (type: PetType): Pet[] => {
      return data.filter(item => {
        if(item.type === type){
          return true;
        } else {
          return false;
        }
      })
  },
  getFromName: (name: string): Pet[] => {
    return data.filter(item => {
      if(item.name.toLowerCase().indexOf(name.toLowerCase()) > -1) {
        return true;
      } else {
        return false;
      }
    })
  }
}

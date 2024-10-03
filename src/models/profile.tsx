import jessiPicture from '../assets/Imagenes/Jessi U.png';
import pipePicture from '../assets/Imagenes/Profile Picture.png';
import alzatePicture from '../assets/Imagenes/Alzate.png';

export interface ICollaborators {
  id: number;
  name: string;
  image: string;
  songs: { title: string; authors: string }[];
}

export const profileInfo = {
  name: 'Paola Andrea',
  lastName: 'Zapata Jaramillo',
  department: '',
  address: 'Cl. 185 #17-98, Edificio Victo...',
  city: 'Bogotá',
  postal: '606',
  celphone: '+57 3122252113',
  language: '',
  country: '',
};

export const profileStats = [
  {
    id: 1,
    number: '3785',
    reason: 'Minutos escuchados',
  },
  {
    id: 2,
    number: '57',
    reason: 'Minutos escuchados',
  },
  {
    id: 3,
    number: '9',
    reason: 'Artistas colaboradores',
  },
];

export const collaborators: ICollaborators[] = [
  {
    id: 1,
    name: 'Jessi Uribe',
    image: jessiPicture,
    songs: [
      {
        title: 'La Conquista',
        authors: 'Jessi Uribe y Paola Jara',
      },
      {
        title: 'Como Si Nada',
        authors: 'Jessi Uribe y Paola Jara',
      },
      {
        title: 'Amor De Mi Vida',
        authors: 'Jessi Uribe y Paola Jara',
      },
    ],
  },
  {
    id: 2,
    name: 'Pipe Bueno',
    image: pipePicture,
    songs: [
      {
        title: 'Usted No Me Olvida',
        authors: 'Joaquin Guiller x Pipe Bueno x Paola Jara x Jhonny R',
      },
      {
        title: 'No me Digas Que No',
        authors: 'Pipe Bueno x Luis Alfonso',
      },
      {
        title: 'Te Hubieras Ido Antes',
        authors: 'Pipe Bueno',
      },
    ],
  },
  {
    id: 3,
    name: 'Alzate',
    image: alzatePicture,
    songs: [
      {
        title: 'Amor Eterno',
        authors: 'Alzate x Paola Jara',
      },
      {
        title: 'Voy a Beber',
        authors: 'Alzate',
      },
      {
        title: 'Maldita Traición',
        authors: 'Alzate',
      },
    ],
  },
];

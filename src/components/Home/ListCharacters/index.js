import Image from 'next/image';
import ImageCharacter from '../../../assets/character.jpg';
import LogoMarvel from '../../../assets/logo.svg';
import { Container } from '../../../styles/global';
import { StyleListCharacters, StyleSectionCharacters } from './styles';
import { CardCharacter } from '../../CardCharacter';

const characters = [
  {
    name: 'Killmonger',
    image: ImageCharacter,
    slug: 'killmonger',
  },
  {
    name: 'Captain Carter',
    image: ImageCharacter,
    slug: 'captain-carter',
  },
  {
    name: 'Killmonger',
    image: ImageCharacter,
    slug: 'killmonger',
  },
  {
    name: 'Killmonger',
    image: ImageCharacter,
    slug: 'killmonger',
  },
  {
    name: 'Captain Carter',
    image: ImageCharacter,
    slug: 'captain-carter',
  },
  {
    name: 'Killmonger',
    image: ImageCharacter,
    slug: 'killmonger',
  },
  {
    name: 'Captain Carter',
    image: ImageCharacter,
    slug: 'captain-carter',
  },
];

export function ListCharacters() {
  return (
    <StyleSectionCharacters>
      <Container>
        <div className="title">
          <span>What if</span>
          <h2>Personagens Marvel</h2>
        </div>
        <StyleListCharacters>
          {characters.map(({ name, image, slug }, index) => {
            return (
              <CardCharacter
                key={index}
                image={image}
                name={name}
                slug={slug}
              />
            );
          })}

          <div className="marvel">
            <Image src={LogoMarvel} alt="Logo marverl" />
          </div>
        </StyleListCharacters>
      </Container>
    </StyleSectionCharacters>
  );
}

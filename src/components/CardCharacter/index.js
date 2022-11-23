import Link from 'next/link';
import { StyleCard } from './styles';
import ImageCharacter from '../../assets/character.jpg';
import Image from 'next/image';

export function CardCharacter({ image, name, slug }) {
  return (
    <StyleCard>
      <Link href={`/character/${slug}`}>
        <div className="image">
          <Image width={280} height={372} src={image} alt="Image Character" />
        </div>
        <div className="info">
          <div>
            <h3>{name}</h3>
            <span>Marvel Studios</span>
          </div>
          <span className="serie">What If</span>
        </div>
      </Link>
    </StyleCard>
  );
}

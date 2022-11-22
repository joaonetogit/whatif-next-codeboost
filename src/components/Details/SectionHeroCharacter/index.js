import { Container } from '../../../styles/global';
import { StyleSectionHeroCharacter } from './styles';

import ImagePerson from '../../../assets/character.jpg';
import Image from 'next/image';

export function SectionHeroCharacter() {
  return (
    <StyleSectionHeroCharacter>
      <Container>
        <div className="image">
          <Image src={ImagePerson} alt="Image Person" />
        </div>
        <div className="info">
          <span>A história</span>
          <div className="text">
            <h1 className="title">T’Challa Senhor das Estrelas</h1>
            <p className="text">
              Nulla eu sapien ante. Praesent convallis posuere rhoncus. Aliquam
              aliquet ut odio ac lobortis. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Aliquam
              erat volutpat. Aenean facilisis diam quis nunc tempus, in placerat
              sem tincidunt. Sed id aliquet neque, quis varius ligula
            </p>
          </div>
        </div>
      </Container>
    </StyleSectionHeroCharacter>
  );
}

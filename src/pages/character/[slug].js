import { SectionHeroCharacter } from '../../components/Details/SectionHeroCharacter';
import { ListCharacters } from '../../components/Home/ListCharacters';
import { PageTitle } from '../../components/PageTitle';

export default function PageCharacter() {
  return (
    <>
      <PageTitle
        title="What If? - Codeboost | Detalhes do personagem"
        description="Um projeto desenvolvido no curso codeboost"
      />
      <SectionHeroCharacter />
    </>
  );
}

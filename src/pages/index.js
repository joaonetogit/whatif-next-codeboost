import { ListCharacters } from '../components/Home/ListCharacters';
import { SectionHero } from '../components/Home/sectionHero';
import { PageTitle } from '../components/PageTitle';

export default function Home() {
  return (
    <>
      <PageTitle
        title="What If? - Codeboost"
        description="Um projeto desenvolvido no curso codeboost"
      />
      <SectionHero />
      <ListCharacters />
    </>
  );
}

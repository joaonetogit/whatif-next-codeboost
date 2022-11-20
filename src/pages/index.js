import { Header } from '../components/Header';
import { ListCharacters } from '../components/Home/ListCharacters';
import { SectionHero } from '../components/Home/sectionHero';

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <ListCharacters />
    </>
  );
}

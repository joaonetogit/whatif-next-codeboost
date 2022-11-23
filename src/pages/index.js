import { ListCharacters } from '../components/Home/ListCharacters';
import { SectionHero } from '../components/Home/sectionHero';
import { PageTitle } from '../components/PageTitle';
import { getPrismicClient } from '../service/prismic';

export default function Home({ dataPage }) {
  return (
    <>
      <PageTitle
        title="What If? - Codeboost"
        description="Um projeto desenvolvido no curso codeboost"
      />
      <SectionHero data={dataPage} />
      <ListCharacters />
    </>
  );
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const contentsPages = await prismic.getSingle('home');
  return {
    props: {
      dataPage: contentsPages.data,
    },
    revalidate: 10,
  };
};

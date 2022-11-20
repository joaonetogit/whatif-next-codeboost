import { useRouter } from 'next/router';

export default function PageCharacter() {
  const route = useRouter();
  return <h1>Detalhes do personagem {JSON.stringify(route.query)}</h1>;
}

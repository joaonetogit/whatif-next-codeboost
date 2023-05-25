# Projeto WhatIf CodeBoost

Este projeto é um exemplo de construção de um site utilizando Next.js como framework, Yarn como gerenciador de pacotes, Stitches para estilização e Prismic para gerenciamento de conteúdo.

Você pode visualizar o projeto online através do seguinte link: [WhatIf CodeBoost](https://joao-whatif-codeboost.vercel.app/)

## Funcionalidades

- Site dinâmico com conteúdo gerenciável através do Prismic.
- Utilização do Next.js para renderização do lado do servidor (SSR).
- Utilização do Stitches para estilização dos componentes.
- Integração com Prismic para facilitar o gerenciamento de conteúdo.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js (versão 12 ou superior)
- Yarn (gerenciador de pacotes)

## Instalação

Siga as instruções abaixo para configurar e executar o projeto localmente:

1. Clone este repositório em sua máquina local:

   ```
   git clone https://github.com/joaonetogit/whatif-codeboost.git
   ```

2. Navegue até o diretório raiz do projeto:

   ```
   cd whatif-codeboost
   ```

3. Instale as dependências do projeto utilizando o Yarn:

   ```
   yarn install
   ```

## Uso

Após a instalação, você pode executar o projeto localmente com o seguinte comando:

```
yarn dev
```

Isso iniciará o servidor de desenvolvimento e você poderá acessar o projeto no seu navegador através do endereço `http://localhost:3000`.

## Configuração do Prismic

Para utilizar o Prismic para gerenciamento de conteúdo, você precisará configurar suas credenciais no arquivo `.env.local`. Siga as etapas abaixo:

1. Crie um arquivo `.env.local` na raiz do projeto.

2. Adicione as seguintes variáveis de ambiente no arquivo `.env.local`:

   ```
   PRISMIC_API_ENDPOINT=SUA_URL_API_PRISMIC
   PRISMIC_ACCESS_TOKEN=SUA_CHAVE_DE_ACESSO
   ```

   Substitua `SUA_URL_API_PRISMIC` pela URL da API do Prismic e `SUA_CHAVE_DE_ACESSO` pela sua chave de acesso.

3. Salve o arquivo `.env.local`.

## Contribuição

Contribuições são bem-vindas! Se você quiser contribuir para este projeto, siga as etapas abaixo:

1. Fork este repositório.
2. Crie uma branch com a sua feature ou correção de bug: `git checkout -b minha-feature`.
3. Faça as alterações desejadas e faça commit delas: `git commit -m 'Minha nova feature'`.
4. Envie para o branch principal: `git push origin minha-feature`.
5. Abra uma Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Se você tiver alguma dúvida ou sugestão em relação a este projeto, sinta-se à vontade para entrar em contato comigo através do e-mail [joaoneto.work@gmail.com] ou visite meu perfil no [meu GitHub](https://github.com/joaonetogit).

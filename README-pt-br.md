# alps-react

You can read the English version of this manual by [clicking here](https://github.com/adventistchurch/alps-react/blob/master/README.md)

> [WIP] Uma implementação em React do [ALPS](http://alps.adventist.io/v3)

[![ALPS-React Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](https://alps-react.adventist.io/)

Para mais informações e referências, leia a documentação do ALPS (em inglês):

- [Alps Pattern Lab](https://alps.adventist.io/v3/)
- [Alps-React Storybook](https://alps-react.adventist.io/)

## Usar em seu projeto

Adicione `alps-react` como depêndencia:

- Usando `yarn`

  ```bash
  yarn add alps-react
  ```

- Usando `npm`

  ```bash
  npm intall alps-react
  ```

Então importe e use os componentes no seu código:

```jsx
import {
  AlpsContextProvider,
  Body,
  Button,
  Blockquote,
  Div,
  MediaBlock,
} from 'alps-react'

function MyApp(props) {
  return (
    // É necessário que o componente AlpsContextProvider seja o pai dos outros components do ALPS-React (normalmente em App root)
    <AlpsContextProvider>
      <Body primaryColor="bluejay" hasGrid>
        <Div spacing="double" padding>
          <Button text="Bem-Vindo ao ALPS-React" />

          <MediaBlock
            type="inline"
            title="Sunt id vel ipsum at ut praesentium aut."
            description="Repellat libero qui magni at ut sapiente facere nam veritatis."
            kicker="Cumque omnis velit."
            category="Church"
            date={new Date()}
            image={{
              srcSet: {
                default: '//picsum.photos/480/270?image=248',
                '500': '//picsum.photos/720/405?image=248',
                '900': '//picsum.photos/960/540?image=248',
              },
              alt: 'Placeholder image',
            }}
            reversed={true}
            cta="Read more"
            url="#/link/to/article"
          />

          <Blockquote text="Asperiores quisquam perferendis dolor in amet." />
        </Div>
      </Body>
    </AlpsContextProvider>
  )
}
```

> _Observação_: Esse é só um simples exemplo de como a API funciona. Você pode utilizar os componentes da forma como você quiser, porém, recomendamos que os utilize provendo as configurações e dados aos seus subcomponentes.

### Adicione os Assets: estilos e fontes do ALPS

Você deve incluir também, na tag `<head>` do seu HTML as fontes e os arquivos de estilos das CDN's oficiais.

```html
<!-- FONT -->
<link
  rel="stylesheet"
  type="text/css"
  href="//fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i|Noto+Serif:400,400i,700,700i"
  media="all"
/>

<!-- ALPS CSS -->
<link
  rel="stylesheet"
  type="text/css"
  href="//cdn.adventist.org/alps/3/3.7.0/css/main-bluejay.css"
  media="all"
/>
```

_Nota_: Substitua `bluejay` pela cor do tema ALPS que você planeja usar (verifique o array`primaryColors` em `src/atoms/global/colors.js` para todas as opções disponíveis)

Caso você queira adicionar programaticamente, a variável `externalAssets` é exposta em `alps-react`:

```jsx
import { Helmet } from "react-helmet"

import { getExternalAssets, AlpsContextProvider, Body } from 'alps-react'

const externalAssets = getExternalAssets({ version: '3.7.0', theme: 'bluejay' })

function MyApp () {
    return (
      <React.Fragment>
        <Helmet>
          <title>My App</title>
          <link rel="canonical" href="http://myapp.com" />

          {externalAssets.css.map(href => (
            <link rel="stylesheet" type="text/css" href={href} media="all" />
          ))}
        </Helmet>

        <AlpsContextProvider>
          <Body primaryColor="bluejay" hasGrid>
            {/* ALPS-React components go here */}
          </Body>
        </AlpsContextProvider>
      </React.Fragment>
    )
  }
}
```

Depois de adicionar os assets você verá algo parecido com isso:

![Example output](public/example-output.png?raw=true)

## Desenvolvimento

### Requisitos

- [Node](https://nodejs.org)
- [yarn](https://yarnpkg.com/en/docs/install)

### Instale as dependências

```bash
yarn
```

### Inicie o Storybook

- **Executando Storybook**: Irá iniciar um servidor storybook local com hot reload em `http://localhost:9009`

  ```bash
  yarn storybook
  ```

- **Buildando Storybook**: Irá fazer um bundle do storybook como arquivos estáticos em `/storybook-static`

  ```bash
  yarn build-storybook
  ```

### Buildando para produção

Para buildar para produção, execute:

```bash
yarn build
```

> Esta biblioteca é construida utilizando [Rollup.js](https://rollupjs.org)

## Desenvolvimento com Docker

Se você quiser desenvolver o projeto utilizando Docker, siga as instruções abaixo.

### Requisitos

- Docker

  - [Docker para Mac](https://store.docker.com/editions/community/docker-ce-desktop-mac)
  - [Docker para Windows](https://store.docker.com/editions/community/docker-ce-desktop-windows)
  - **Docker para Linux**: Por favor verifique a versão disponível para o sistema de gerenciamento de pacotes da sua distribuição

- docker-compose
  - docker-compose **vem incluso na instalação do Docker** por padrão tanto nas versões de **Mac OS** como de **Windows**
  - docker-compose para linux: Por favor verifique a versão disponível para o sistema de gerenciamento de pacotes da sua distribuição

#### Uma sugestão sobre docker-compose

Nós executamos o Node através do Docker. Para utilizar ferramentas como o Yarn, é preciso passar os comandos para o container do Docker. Por esse motivo comando se torna bem grande:

`docker-compose -f docker-compose.cli.yml run --rm <command>`

Por isso recomendamos criar um alias para `docker-compose -f docker-compose.cli.yml run --rm` e chamá-lo de `dcli` (Docker CLI).

### Instale as dependências

```bash
dcli yarn install
```

### Inicie o Storybook

- **Executando Storybook**: Irá iniciar um servidor storybook local com hot reload em `http://localhost:9009`

  ```bash
  dcli --service-ports yarn storybook
  ```

- **Buildando Storybook**: Irá fazer um bundle do storybook como arquivos estáticos em `/storybook-static`

  ```bash
  dcli yarn build-storybook
  ```

### Buildando para produção

Para buildar para produção, execute:

```bash
dcli yarn build
```

## Copyright

&copy; 2019 Conferência Geral da Igreja Adventista do Sétimo Dia [https://adventist.org](https://adventist.org) | [https://adventist.io](https://adventist.io)

Desenvolvido por [Stimme der Hoffnung e.V](https://stimme-der-hoffnung.de) na Alemanha

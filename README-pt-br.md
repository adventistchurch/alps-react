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
import { Wrapper, Button, Blockquote, Div, MediaBlock } from 'alps-react'

function MyApp(props) {
  return (
    // É necessário que o componente Wrapper seja o pai dos outros components do ALPS-React (normalmente em App root)
    <Wrapper hasGrid={true} primaryColor="bluejay">
      <Div spacingSize="double" padding>
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
              default: '//picsum.photos/500/375?image=248',
              '500': '//picsum.photos/700/600?image=248',
              '900': '//picsum.photos/900/700?image=248',
            },
            alt: 'Placeholder image',
          }}
          reversed={true}
          cta="Read more"
          url="#/link/to/article"
        />

        <Blockquote text="Asperiores quisquam perferendis dolor in amet." />
      </Div>
    </Wrapper>
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
  href="//cdn.adventist.org/alps/3/latest/css/main.css"
  media="all"
/>
```

Caso você queira adicionar programaticamente, a variável `externalAssets` é exposta em `alps-react`: 

```jsx
import { Helmet } from "react-helmet"

import { externalAssets, Wrapper } from 'alps-react'

function MyApp () {
    return (
      <React.Fragment>
        <Helmet>
          <title>Meu App</title>
          <link rel="canonical" href="http://meuapp.com" />

          {externalAssets.css.map(href => (
            <link rel="stylesheet" type="text/css" href={href} media="all" />
          ))}
        </Helmet>

        <Wrapper hasGrid={true} primaryColor="bluejay">
          {/* componentes ALPS-React entram aqui */}
        </Wrapper>
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

## Copyright

&copy; 2019 Conferência Geral da Igreja Adventista do Sétimo Dia [https://adventist.org](https://adventist.org) | [https://adventist.io](https://adventist.io)

Desenvolvido por [Stimme der Hoffnung e.V](https://stimme-der-hoffnung.de) na Alemanha

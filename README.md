# Boas-vindas ao repositório do projeto Meme Generator!

### README Translations:
* [English](/README.en.md)
* [Portuguese](/README.md)

---

## 👨‍💻 O que foi desenvolvido:

  - Uma aplicação usando HTML, CSS e JAVASCRIPT onde seja possível fazer upload de imagens para criar memes.

:bulb: **Veja uma amostra a seguir:**

  ![project sample](./sample.gif)

# Requisitos Obrigatórios

## 1. Crie uma caixa de texto

<details>

  <summary>Crie uma caixa de texto com a qual quem usa pode interagir para inserir texto em cima da imagem escolhida.</summary><br/>

  * A caixa onde o texto é inserido deve ter um `id` denominado `text-input`;
  * Você deve criar um elemento para servir de _"container"_ para a **imagem** e para o **texto** do meme. Este elemento deve ter um `id` denominado `meme-image-container`;
  * Dentro do elemento de container, você deve criar um outro elemento para mostrar o texto digitado. O elemento de texto deve estar totalmente contido dentro do container e ter o `id` denominado `meme-text`;
  * Se não houver imagem inserida, ele deve ser inserido e estar visível dentro do container vazio onde a imagem aparecerá.

  **O que será testado:**

  * O input de texto existe e conseguimos inputar texto nele;
  * O texto digitado no input é visível na tela;
  * Existe um elemento de container para onde o texto será mostrado.

</details>

## 2. Crie uma lógica para upload de imagem

<details>

  <summary>O site deve permitir que quem usa faça upload de uma imagem de seu computador.</summary><br/>

  * Dentro do elemento de container, você deve criar um outro elemento para mostrar a imagem selecionada. Este elemento deve possuir um `id` denominado `meme-image`;
  * O elemento onde é feito o upload da imagem deve ser identificado com o `id` denominado `meme-insert`. Este elemento não precisa estar dentro do elemento de container;
  * A imagem deve estar totalmente contida dentro do elemento identificado como `meme-image-container` ~~("totalmente contida" quer dizer que não deve sobrar espaço entre o container e a imagem, e a imagem não deve ultrapassar o tamanho do container)~~;
  * O texto inserido no elemento `text-input` deve ser inserido sobre a imagem escolhida `meme-image`.

  **O que será testado:**

  * É possível carregar uma imagem através do elemento correto;
  * A imagem carregada é exibida dentro do elemento correto;
  * O texto é inserido corretamente sobre a imagem.

</details>

## 3. Adicione uma moldura no container

<details>

  <summary>Adicione uma moldura no container. A moldura deve ter 1 pixel de largura, deve ser preta e do tipo 'solid'. A área onde a imagem aparecerá deve ter fundo branco.</summary><br/>

  * O elemento que serve de container para a imagem deve ter a cor de fundo branca;
  * O elemento que serve de container para a imagem deve ter uma borda preta, sólida, com 1 pixel de largura;
  * A imagem deve estar totalmente contida dentro do elemento identificado como `meme-image-container` ("totalmente contida" quer dizer que não deve sobrar espaço entre o container e a imagem, e a imagem não deve ultrapassar o tamanho do container).

  **O que será testado:**

  * O elemento que serve de container para a imagem tem a cor de fundo branca;
  * O elemento que serve de container para a imagem tem uma borda preta, sólida, com 1 pixel de largura;
  * A imagem deve estar totalmente contida dentro do elemento identificado como `meme-image-container`.

</details>

## 4. Adicione o texto que será inserido sobre a imagem

<details>

  <summary>Adicione o texto que será inserido sobre a imagem. Ela deve ter uma cor, sombra e tamanho específicos.</summary><br/>

  * O texto do elemento `meme-text` deve ter:
    * Uma sombra preta, de 5 pixels na horizontal, 5 pixels na vertical e um raio de desfoque de 5 pixels;
    * Uma fonte com o tamanho de 30 pixels;
    * Deve estar na cor branca.

  **O que será testado:**

  * O texto do elemento `meme-text` dtem uma sombra preta, de 5 pixels na horizontal, 5 pixels na vertical e um raio de desfoque de 5 pixels;
  * O texto do elemento `meme-text` tem a fonte com o tamanho de 30 pixels;
  * O texto do elemento `meme-text` deve estar na cor branca.

</details>

## 5. Limite o tamanho do texto do meme

<details>

  <summary>Limite o tamanho do texto que a pessoa usuária pode inserir</summary><br/>

  * A quantidade máxima de caracteres digitáveis no elemento `text-input` deve ser 60.

  **O que será testado:**

  * A quantidade máxima de caracteres digitáveis no elemento `text-input` não ultrapassa 60.

</details>

# Requisitos Bônus

## 6. Permita a customização das bordas do meme pela pessoa usuária

<details>

  <summary>A página deve ter três botões, que ao serem clicados devem cada um trocar a própria borda ao redor do container (são três bordas diferentes)</summary><br/>

  * As bordas devem ser acrescentadas ao container, identificado como `meme-image-container`;
  * Os três botões devem ser elementos do tipo `button`;
  * Cada elemento `button` deve ser estilizado de forma a ter a cor de fundo da mesma cor que a moldura que irá colocar no container;
  * Cada `button` deve ter o respectivo `id` e estilizar o container conforme especificado:
    * Um botão identificado com o `id` chamado `fire` deve estilizar o container da imagem com uma borda de 3 pixels, _dashed_ e vermelha (`rgb(255, 0, 0)`).
    * Um botão com `id` chamado `water` deve estilizar o container da imagem com uma borda azul (`rgb(0, 0, 255)`), com 5 pixels do tipo _double_ .
    * Um botão com `id` chamado `earth` deve estilizar o container da imagem com uma borda do tipo _groove_, verde (`rgb(0, 128, 0)`) e com 6 pixels.
  * Após uma das três bordas ser selecionada, a borda padrão especificada no requisito 3 não deve mais aparecer.

  **O que será testado:**

  * O botão com identificado com id `fire` funciona corretamente;
  * O botão com identificado com id `water` funciona corretamente;
  * O botão com identificado com id `earth` funciona corretamente.

</details>

## 7. Crie um conjunto de quatro imagens pré prontas para a pessoa usuária escolher.

<details>

  <summary>Mostre miniaturas das imagens e, mediante clique da pessoa usuária, essa imagem deve aparecer dentro da moldura do elemento de container.</summary><br/>

  * O elemento que mostra as miniaturas dos memes (imagens) deve ser identificado um `id` denominado `meme-1` para o primeiro meme, `meme-2` para o segundo, `meme-3` para o terceiro e `meme-4` para o quarto.
  * As imagens que identificam os memes devem ficar dentro da aplicação, num diretório chamado `imgs` com os respectivos nomes `meme1.png`, `meme2.png`, `meme3.png` e `meme4.png`. Atenção também para o formato das imagens! ⚠️
  * As imagens devem aparecer dentro do container de forma análoga às imagens enviadas por _upload_ para a página.

  **O que será testado:**

  * As imagens prontas apresentam o comportamente esperado.

</details>

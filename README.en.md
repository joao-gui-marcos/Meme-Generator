# Welcome to the Meme Generator project repository!

### README Translations:

-   [English](/README.en.md)
-   [Portuguese](/README.md)

* * *

## 👨‍💻 What was developed:

-   An application using HTML, CSS and JAVASCRIPT where you can upload images to create memes.

:bulb:**See a sample below:**

![project sample](./sample.gif)

# Mandatory Requirements

## 1. Create a text box

<details>

  <summary>Crie uma caixa de texto com a qual quem usa pode interagir para inserir texto em cima da imagem escolhida.</summary><br/>

-   The box where the text is entered must have a`id`denominated`text-input`;

-   You must create an element to serve as_"container"_to the**Image**and for the**text**from the meme. This element must have a`id`denominated`meme-image-container`;

-   Inside the container element, you must create another element to display the typed text. The text element must be fully contained within the container and have the`id`denominated`meme-text`;

-   If there is no image inserted, it must be inserted and be visible inside the empty container where the image will appear.

    **What will be tested:**

-   The text input exists and we were able to input text into it;

-   The text typed in the input is visible on the screen;

-   There is a container element where the text will be displayed.

</details>

## 2. Create an image upload logic

<details>

  <summary>O site deve permitir que quem usa faça upload de uma imagem de seu computador.</summary><br/>

-   Inside the container element, you must create another element to display the selected image. This element must have a`id`denominated`meme-image`;

-   The element where the image is uploaded must be identified with the`id`denominated`meme-insert`. This element does not have to be inside the container element;

-   The image must be fully contained within the element identified as`meme-image-container`~~("fully contained" means that there should be no space left between the container and the image, and the image must not exceed the size of the container)~~;

-   The text inserted into the element`text-input`must be inserted over the chosen image`meme-image`.

    **What will be tested:**

-   It is possible to load an image through the correct element;

-   The loaded image is displayed inside the correct element;

-   The text is correctly inserted over the image.

</details>

## 3. Add a frame to the container

<details>

  <summary>Adicione uma moldura no container. A moldura deve ter 1 pixel de largura, deve ser preta e do tipo 'solid'. A área onde a imagem aparecerá deve ter fundo branco.</summary><br/>

-   The element that serves as a container for the image must have a white background color;

-   The element that serves as a container for the image must have a solid black border, 1 pixel wide;

-   The image must be fully contained within the element identified as`meme-image-container`("fully contained" means that there should be no space left between the container and the image, and the image must not exceed the size of the container).

    **What will be tested:**

-   The element that serves as a container for the image has a white background color;

-   The element that serves as a container for the image has a solid black border 1 pixel wide;

-   The image must be fully contained within the element identified as`meme-image-container`.

</details>

## 4. Add the text that will be inserted over the image

<details>

  <summary>Adicione o texto que será inserido sobre a imagem. Ela deve ter uma cor, sombra e tamanho específicos.</summary><br/>

-   The element text`meme-text`must have:

    -   A black shadow, 5 pixels horizontally, 5 pixels vertically, and a blur radius of 5 pixels;
    -   A font with the size of 30 pixels;
    -   It must be white in color.

    **What will be tested:**

-   The element text`meme-text`has a black shadow, 5 pixels horizontally, 5 pixels vertically, and a blur radius of 5 pixels;

-   The element text`meme-text`has the font with the size of 30 pixels;

-   The element text`meme-text`must be white in color.

</details>

## 5. Limit meme text size

<details>

  <summary>Limite o tamanho do texto que a pessoa usuária pode inserir</summary><br/>

-   The maximum amount of typeable characters in the element`text-input`must be 60.

    **What will be tested:**

-   The maximum amount of typeable characters in the element`text-input`does not exceed 60.

</details>

# Bonus Requirements

## 6. Allow the user to customize the meme borders

<details>

  <summary>A página deve ter três botões, que ao serem clicados devem cada um trocar a própria borda ao redor do container (são três bordas diferentes)</summary><br/>

-   Borders must be added to the container, identified as`meme-image-container`;

-   The three buttons must be elements of the type`button`;

-   each element`button`it must be styled so that the background color is the same color as the frame that will be placed in the container;

-   Each`button`must have the respective`id`and style the container as specified:
    -   A button identified with the`id`called`fire`should style the image container with a border of 3 pixels,_dashed_it's red (`rgb(255, 0, 0)`).
    -   A button with`id`called`water`should style the image container with a blue border (`rgb(0, 0, 255)`), with 5 pixels of type_double_.
    -   A button with`id`called`earth`should style the image container with a border like_groove_, verde (`rgb(0, 128, 0)`) e with 6 pixels.

-   After one of the three borders is selected, the default border specified in requirement 3 should no longer appear.

    **What will be tested:**

-   The button labeled with id`fire`works correctly;

-   The button labeled with id`water`works correctly;

-   The button labeled with id`earth`works correctly.

</details>

## 7. Create a set of four pre-made images for the user to choose from.

<details>

  <summary>Mostre miniaturas das imagens e, mediante clique da pessoa usuária, essa imagem deve aparecer dentro da moldura do elemento de container.</summary><br/>

-   The element that shows the thumbnails of the memes (images) must be identified a`id`denominated`meme-1`for the first meme,`meme-2`for the second,`meme-3`for the third and`meme-4`to the room.

-   The images that identify the memes must be inside the application, in a directory called`imgs`with the respective names`meme1.png`,`meme2.png`,`meme3.png`e`meme4.png`. Also pay attention to the format of the images! ⚠️

-   The images must appear inside the container in a similar way to the images sent by_upload_to the page.

    **What will be tested:**

-   Ready images exhibit the expected behavior.

</details>

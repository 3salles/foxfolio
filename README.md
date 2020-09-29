![Badge](https://img.shields.io/badge/license-MIT-brightgreen)
<p align="center">
    <a href="README-en.md">Inglês</a>
    ·
    <a href="README.md">Português</a>
 </p>

# foxfolio
É um portifólio de raposas feito no Google Sheets. Veja a demo do portifolio <a href="https://codepen.io/3salles/pen/BaKeNzE">aqui</a>.

Tabela de conteúdos
=================
<!--ts-->
   * [Tecnologias](#tecnologias)
   * [Configurações](#configurções)
      * [Google Sheets](#google-sheets)
      * [Sheety](#sheety)
      * [CodePen](#codepen)
   * [Autora](#autora)
<!--te-->
## **Tecnologia**
Este projeto utiliza as seguintes tecnologias:<br>
-> <a href="https://www.google.com/sheets">Google Sheets</a><br>
-> <a href="https://sheety.co">Sheety</a><br>
-> <a href="https://codepen.io">CodePen</a><br>
## **Configurações**
### **Google Sheets**
Crie um novo documento no Google Sheets e adicione duas sheets, uma chamada **Meta** e outra **Items**.
<p align="center">
  <img src="https://github.com/3salles/foxfolio/blob/master/assets/sheets00.png">
</p>

Na sheet **Meta**, coloque as colunas **Title**, **Read more** e **Footer** como seus respectivos dados.
<p align="center">
  <img src="https://github.com/3salles/foxfolio/blob/master/assets/sheets01.png">
</p>

Na sheet **Items**, coloque as colunas **Title**, **Description**, **Tags** e *Screenshot** com seus respectivos dados.
<p align="center">
  <img src="https://github.com/3salles/foxfolio/blob/master/assets/sheet02.png">
</p>

### **Sheety**
Agora, iremos conectar o Google Sheet ao Sheety. Faça login com sua conta Gmail.
Coloque o link da panilha do Google Sheet no local indicado.
<p align="center">
  <img src="https://github.com/3salles/foxfolio/blob/master/assets/sheety00.png">
</p>

E clique no botão **Create Project**.
<p align="center">
  <img src="https://github.com/3salles/foxfolio/blob/master/assets/sheety01.png">
</p>

### **CodePen**
Crie um pen e nomeie do jeito que preferir. Adicione o framework <a href="https://tailwindcss.com">Tailwind CSS</a> conforme na configuração CSS do CodePen, ele é usado para criar layouts rápidos.
```bash
https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.2.0/tailwind.min.css
```
<p align="center">
  <img src="https://github.com/3salles/foxfolio/blob/master/assets/codepen00.png">
</p>

Coloque o framework <a href="https://vuejs.org">Vue.js</a> e a biblioteca<a href="https://github.com/axios/axios">Axios</a> na configuração JS do CodePen.
```bash
https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.min.js # Vue.js
https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js # Axios
```
<p align="center">
  <img src="https://github.com/3salles/foxfolio/blob/master/assets/codepen01.png">
</p>
Agora copie e cole o <a href="https://github.com/3salles/foxfolio/blob/master/index.html">index.html</a> e o <a href="https://github.com/3salles/foxfolio/blob/master/script.js">script.js</a> nas áreas indicadas.
<p align="center">
  <img src="https://github.com/3salles/foxfolio/blob/master/assets/codepen02.png">
</p>

No código JS, coloque o link da sheet **Meta** no código na seguinte parte:

```js
axios.get('https://api.sheety.co/4d058b45974651c077d376c5fcf95c9d/portifolio/meta').then(response => (this.meta = response.data.meta[0]))
```
O link você encontra em:
<p align="center">
  <img src="https://github.com/3salles/foxfolio/blob/master/assets/sheety02.png">
</p>

No código JS, coloque o link da sheet **Items** no código na seguinte parte:

```js
axios.get('https://api.sheety.co/4d058b45974651c077d376c5fcf95c9d/portifolio/items').then(response => (this.items = response.data.items))
```
O link você encontra em:
<p align="center">
  <img src="https://github.com/3salles/foxfolio/blob/master/assets/sheety03.png">
</p>

## **Autora**
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/3salles)](https://github.com/3salles)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/beatriz-salles-b701a31a6)](https://www.linkedin.com/in/beatriz-salles-b701a31a6/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:beatrizsallesss@gmail.com)](mailto:beatrizsallesss@gmail.com)

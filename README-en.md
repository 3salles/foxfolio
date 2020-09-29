![Badge](https://img.shields.io/badge/license-MIT-brightgreen)
<p align="center">
    <a href="README-en.md">English</a>
    ·
    <a href="README.md">Portuguese</a>
 </p>

# foxfolio
This is a fox portfolio created in Google Sheets. <a href="https://codepen.io/3salles/pen/BaKeNzE">Here</a> is a demo.

Table Contents
=================
<!--ts-->
   * [Technologies](#technologies)
   * [Building](#building)
      * [Google Sheets](#google-sheets)
      * [Sheety](#sheety)
      * [CodePen](#codepen)
   * [Author](#author)
<!--te-->
## **Technologies**
This project uses these techs:<br>
-> <a href="https://www.google.com/sheets">Google Sheets</a><br>
-> <a href="https://sheety.co">Sheety</a><br>
-> <a href="https://codepen.io">CodePen</a><br>
## **Buildings**
### **Google Sheets**
Create a new Google Sheets doc and add two sheets, **Meta** and **Items**.
<p align="center">
  <img src="https://github.com/3salles/foxfolio/blob/master/assets/sheets00.png">
</p>

In **Meta** sheet, add **Title**, **Read more** and **Footer** columns as the image below.
<p align="center">
  <img src="https://github.com/3salles/foxfolio/blob/master/assets/sheets01.png">
</p>

In **Items** sheet, add**Title**, **Description**, **Tags** and **Screenshot** columns as the image below.
<p align="center">
  <img src="https://github.com/3salles/foxfolio/blob/master/assets/sheet02.png">
</p>

### **Sheety**
Now, we will connect Google Sheet to Sheety. Login with your Gmail acount.
Add Google Sheet link in the indicated location.
<p align="center">
  <img src="https://github.com/3salles/foxfolio/blob/master/assets/sheety00.png">
</p>

Add click on **Create Project** button.
<p align="center">
  <img src="https://github.com/3salles/foxfolio/blob/master/assets/sheety01.png">
</p>

### **CodePen**
Create a pen and name it the way you want. Add <a href="https://tailwindcss.com">Tailwind CSS</a> framework as the image below, it is usaed to create quickly layouts.
```bash
https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.2.0/tailwind.min.css
```
<p align="center">
  <img src="https://github.com/3salles/foxfolio/blob/master/assets/codepen00.png">
</p>

Add <a href="https://vuejs.org">Vue.js</a> framework and <a href="https://github.com/axios/axios">Axios</a> libary as the image below.
```bash
https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.min.js # Vue.js
https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js # Axios
```
<p align="center">
  <img src="https://github.com/3salles/foxfolio/blob/master/assets/codepen01.png">
</p>

Now copy and paste <a href="https://github.com/3salles/foxfolio/blob/master/index.html">index.html</a> and <a href="https://github.com/3salles/foxfolio/blob/master/script.js">script.js</a> files in the indicated locals.
<p align="center">
  <img src="https://github.com/3salles/foxfolio/blob/master/assets/codepen02.png">
</p>

In JS code, add **Meta** sheet link in code part below:

```js
axios.get('https://api.sheety.co/4d058b45974651c077d376c5fcf95c9d/portifolio/meta').then(response => (this.meta = response.data.meta[0]))
```
You can find link in:
<p align="center">
  <img src="https://github.com/3salles/foxfolio/blob/master/assets/sheety02.png">
</p>

In JS code, add **Items** sheet link in code part below:

```js
axios.get('https://api.sheety.co/4d058b45974651c077d376c5fcf95c9d/portifolio/items').then(response => (this.items = response.data.items))
```
You can find link in:
<p align="center">
  <img src="https://github.com/3salles/foxfolio/blob/master/assets/sheety03.png">
</p>

## **Autora**
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/3salles)](https://github.com/3salles)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/beatriz-salles-b701a31a6)](https://www.linkedin.com/in/beatriz-salles-b701a31a6/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:beatrizsallesss@gmail.com)](mailto:beatrizsallesss@gmail.com)

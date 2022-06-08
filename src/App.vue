<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
</script>

<template>
  <Header />

  <RouterView />
</template>

<style lang="scss">
*:not(body){
  transition: color .7s, background-color .7s;
}
#app{
  background: var(--app-background-color);
  transition: color .7s, background-color .7s;
}
@font-face {
  font-family: "Neue Helvetica Light";
  src: url(./assets/fonts/Helvetica-Neue-LT-45-Light.ttf);
}

@font-face {
  font-family: "Neue Helvetica Regular";
  src: url(./assets/fonts/Helvetica-Neue-LT-55-Roman.ttf);
}

@font-face {
  font-family: "Neue Helvetica Medium";
  src: url(./assets/fonts/Helvetica-Neue-LT-65-Medium.ttf);
}

@font-face {
  font-family: "Neue Helvetica Bold";
  src: url(./assets/fonts/Helvetica-Neue-LT-75-Bold.ttf);
}

@font-face {
  font-family: "Neue Helvetica Heavy";
  src: url(./assets/fonts/Helvetica-Neue-LT-85-Heavy.ttf);
}

:root {
    --app-background-color: #f0f0f0;
    --dynamic-title-color: #141414;
    --dynamic-holder-bg-color: #e9e9e9;
    --dynamic-subtitle-color: #141414;
}

[theme="dark"] {
    --app-background-color: #141414;
    --dynamic-title-color: #f0f0f0;
    --dynamic-holder-bg-color: #1d1d1d;
    --dynamic-subtitle-color: #f0f0f0;
}

*{
  font-family: "Neue Helvetica Regular";
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: var(--app-background-color);
  color: var(--dynamic-subtitle-color);
  transition: color .7s, background-color .7s;
}

.container{
  max-width: 94vw;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

h1, h2, h3, h4, h5{
  font-family: "Neue Helvetica Bold";
  font-weight: normal;
  color: var(--dynamic-title-color);
}
p{
  font-family: "Neue Helvetica Regular";
  font-weight: normal;
  color: var(--dynamic-title-color);
  font-size: 15px;
  line-height: 1.3;
}
button, a, .search-title{
  cursor: pointer;
}
</style>

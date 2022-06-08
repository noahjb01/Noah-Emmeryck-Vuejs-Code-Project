<template>
    <!-- Desktop nav -->
    <div class="desktop-nav-box">
      <div class="desktop-nav-container">
        <div class="left-nav nav-item">
          <router-link class="title-menu artwork-menu" :to="`/`">Artworks</router-link>
        </div>
        <div class="center-nav nav-item">
          <div>
            <p v-on:click="searchanim" class="title-menu search-title">Search</p>
            <div class="search-container search-container-desktop">
              <input type="text" placeholder="Search for an artwork" v-model="valueSearch"/>
              <router-link :to="`/search/${valueSearch}`">
              <button type="submit" class="submitsearch" v-on:click="searchbtn">Search</button></router-link>
              <button v-on:click="backanim" class="close-search">X</button>
            </div>
          </div>
        </div>
        <div class="right-nav nav-item">
          <input type="checkbox" id='theme-switch' class='theme-switch' v-model="darkMode"/>
            <label for='theme-switch'>
              <span v-if="darkMode === true">
                <img alt="logo" src="../assets/lightmode.svg" width="23">
              </span>
              <span v-else>
                <img alt="logo" src="../assets/darkmode.svg" width="23">
              </span>
            </label>
        </div>
      </div>
    </div>

    <!-- Mobile nav -->
    <div class="search-container-mobile search-container">
      <input type="text" placeholder="Search for an artwork" v-model="valueSearch"/>
      <router-link :to="`/search/${valueSearch}`">
      <button type="submit" class="submitsearch">Search</button></router-link>
    </div>

</template>

<script>
import gsap from 'gsap'
import { ref } from 'vue'


export default {
        methods: {
        searchanim: function (event) {
            gsap.timeline()
            .fromTo(".title-menu.search-title",{opacity:1},{duration: 1, opacity: 0, display: "none", ease: "power3.inOut"})
            .fromTo(".search-container.search-container-desktop",{opacity:0, display:"none"},{duration: 1, opacity: 1, display: "block", ease: "power3.inOut"});
          },
        backanim: function (event) {
            gsap.timeline()
            .to(".search-container.search-container-desktop",{duration: 1, opacity:0, display:"none", ease: "power3.inOut"})
            .to(".title-menu.search-title",{duration: 1, opacity:1, display:"block", ease: "power3.inOut"});
          },  
        searchbtn: function (event) {
            this.backanim()
          },       
        },
        data() {
          let valueSearch = ref("")
            return {
                darkMode: false,
                valueSearch
            }
        },
        mounted() {

            // set 'app-background' class to body tag
            let bodyElement = document.body;
            bodyElement.classList.add("app-background");

            // check for active theme
            let htmlElement = document.documentElement;
            let theme = localStorage.getItem("theme");

            if (theme === 'dark') {
                htmlElement.setAttribute('theme', 'dark')
                this.darkMode = true
            } else {
                htmlElement.setAttribute('theme', 'light');
                this.darkMode = false
            }
        },
        watch: {
            darkMode: function () {
                // add/remove class to/from html tag
                let htmlElement = document.documentElement;

                if (this.darkMode) {
                    localStorage.setItem("theme", 'dark');
                    htmlElement.setAttribute('theme', 'dark');
                } else {
                    localStorage.setItem("theme", 'light');
                    htmlElement.setAttribute('theme', 'light');
                }
            }
        }
    }
</script>

<style lang="scss">
.search-title, .artwork-menu{
  position: relative;
}
.close-search{
  background: none;
  border: none;
  padding: 0 5px;
  font-size: 15px;
}
.search-title:hover:before, .artwork-menu:hover:before{
  transform-origin: left;
  transform: scaleX(1);
}
.search-title:before, .artwork-menu:before{
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #18272F;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .2s ease-in-out;
}
.title-menu{
  text-transform: uppercase;
  text-decoration: none;
  color: var(--dynamic-title-color);
}
.search-container{
  display: none;

  input{
    padding: 5px;
    border: none;
    background: none;
    border-bottom: 2px solid var(--dynamic-title-color);
    outline: none;
    text-align: center;
  }
  button[type=submit]{
    text-transform: uppercase;
    padding: 5px 15px;
    border: 2px var(--dynamic-title-color) solid;
    background: var(--dynamic-title-color);
    color: var(--app-background-color);
    outline: none;
    text-align: center;
  }
}
.desktop-nav-box{
  position: sticky;
  left: 0;
  top: 0;
  right: 0;
  bottom: auto;
  z-index: 10;
  display: flex;
  width: 100%;
  height: 56px;
  justify-content: center;
  align-items: center;
  background: var(--app-background-color);
  transition: color .7s, background-color .7s;


  .desktop-nav-container{
    display: flex;
    max-width: 94vw;
    width: 100%;
    padding: 10px 0;
    align-items: center;

    .left-nav, .center-nav, .right-nav{
      width: 33.33%;
      display: flex;
      align-items: center;
    }

    .center-nav, .right-nav{
      justify-content: center;
    }

    .right-nav{
      justify-content: flex-end;

      input.theme-switch {
        display: none;
      }

      input.theme-switch + label {
        cursor: pointer;
      }

      input.theme-switch:not(:checked) + label:hover {
        cursor: pointer;
      }

      input.theme-switch + label:active,
      input.theme-switch:checked + label {
        cursor: pointer;
      }
    }
  }
}
@media (max-width: 500px) {
    .title-menu.search-title{
        display: none!important;
    }
}
@media (max-width: 500px) {
    .search-container-mobile.search-container{
        display: block;
        display: flex;
        justify-content: center;
        margin-top: 10px;
        margin-bottom: 15px;
    }
}
</style>
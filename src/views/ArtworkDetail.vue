<template>
  <div class="container artwork-single-container">
    <div class="artwork-image-div">
        <div class="holder-single">
            <img v-bind:src="'https://www.artic.edu/iiif/2/'+ data.image_id +'/full/843,/0/default.jpg'" alt="">
        </div>
    </div>
    <div class="artwork-infos-div">
      <button @click="$router.back()" class="goback">Go back</button>
      <h1 class="info-artwork">{{ data.title }}</h1>
      <h2 class="info-artwork">{{ data.artist_title }}</h2>
      <div class="date-div">
        <h3>Date</h3>
        <p class="info-artwork">{{ data.date_display }}</p>
      </div>
      <div class="medium-div">
        <h3>Medium</h3>
        <p class="info-artwork">{{ data.medium_display }}</p>
      </div>
      <div class="dimension-div">
        <h3>Dimensions</h3>
        <p class="info-artwork">{{ data.dimensions }}</p>
      </div>
      <p class="info-artwork description">{{ desc }}</p>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router';
import { ref } from 'vue'
import gsap from 'gsap'
import { onMounted } from 'vue'

let data = ref({}) ;
let desc = ref({}) ;
let id = useRoute().params.artworkId;

let urlAPI = `https://api.artic.edu/api/v1/artworks/${parseInt(id)}`;
let urlAPIDesc = `https://api.artic.edu/api/v1/artworks/${parseInt(id)}/manifest`;

async function loadData() {
  await axios.get(urlAPI)
    .then((response) =>
      data.value = response.data.data
    )

}
async function loadDescription() {
  await axios.get(urlAPIDesc)
    .then((response) =>
      desc.value = response.data.description[0].value
    )

}
loadData();
loadDescription();

onMounted(() => {
  gsap.timeline()
  .fromTo(".holder-single",{opacity: 0},{duration: .5, opacity: 1, y: 0, ease: "power3.inOut"})
  .fromTo(".holder-single img",{opacity: 0, y: "10%",},{duration: 1, opacity: 1, y: 0, ease: "power3.inOut"})
  .fromTo(".artwork-infos-div",{opacity: 0, y: "10%",},{duration: .7, opacity: 1, y: 0, ease: "power3.inOut"})
});

</script>

<style lang="scss">
.artwork-single-container{
  display: grid;
  grid-template-columns: 59% 38%;
  column-gap: 3%;
  max-height: 89vh;
  height: 89vh;


  .artwork-image-div{
    width: 100%;
    height: 100%;
    max-height: 89vh;

    .holder-single{
        overflow: hidden;
        width: 100%;
        padding-top: 3.5rem;
        padding-bottom: 3.5rem;
        padding-left: 3.5rem;
        padding-right: 3.5rem;
        height: 100%;
        background-color: var(--dynamic-holder-bg-color);

        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
  }

  .artwork-infos-div{
    width: 100%;
    align-self: center;

    h2.info-artwork{
      font-family: "Neue Helvetica Regular";
      font-weight: normal;
      font-size: 20px;
      margin-top: 7px;
      margin-bottom: 20px;
    }
    h3{
      font-family: "Neue Helvetica Medium";
      font-weight: normal;
      font-size: 15px;
      margin-bottom: 2px;
    }
    button.goback{
      background: none;
      border: none;
      border-bottom: 2px solid var(--dynamic-title-color);
      font-size: 17px;
      margin-bottom: 25px;
      color: var(--dynamic-title-color);
    }
    .date-div, .medium-div, .dimension-div, .description{
      margin-top: 15px;
    }
  }

}
@media only screen and (max-width: 768px) {
    .artwork-single-container{
        grid-template-columns: 1fr;
        grid-row-gap: 20px;
    }
  }
</style>
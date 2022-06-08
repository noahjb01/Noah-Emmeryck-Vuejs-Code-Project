<script setup>
import ArtworkList from '../components/ArtworkList.vue';
import axios from 'axios';
import gsap from 'gsap'
import { ref } from 'vue'
import { onMounted } from 'vue'

let data = ref({}) // On créé une variable référence, qui pourra être utilisée dans le template
let valueSearch = ref("")
let hasard = Math.floor(Math.random() * 10) + 1

onMounted(() => {
  gsap.timeline()
  .fromTo(".nav-item",{opacity: 0, y: "100%",},{duration: 1.2, opacity: 1, y: 0, ease: "power3.inOut", stagger: .3,})
  .fromTo("#heading",{opacity: 0, y: "10%",},{duration: .7, opacity: 1, y: 0, ease: "power3.inOut"})
});

async function loadData() {
  let urlAPI = `https://api.artic.edu/api/v1/artworks?page=${hasard}&limit=50`
  await axios.get(urlAPI)
    .then((response) =>
      data.value = response.data.data // On précise le .data mais ça dépendra des API
    )
}
loadData();

</script>

<template>
  <div class="container">
      <div id="heading">
        <h1>The Art Institute of Chicago</h1>
      </div>
    <div v-if="data.length">
      <div class="list-artworks">
        <ArtworkList v-for="item in data" :key="item.artworkId" :title="item.title" :id="item.id" :artist="item.artist_title">      
              <template #image>
                <img v-bind:src="'https://www.artic.edu/iiif/2/'+ item.image_id +'/full/843,/0/default.jpg'" />
              </template>
        </ArtworkList>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#heading {
  margin: 1.9rem 0 1.6rem 0;

    h1{
      font-size: 11vw;
      font-family: "Neue Helvetica Heavy";
      text-align: center;
    }
}
</style>
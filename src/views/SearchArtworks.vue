<script setup>
import ArtworkList from '../components/ArtworkList.vue'
import { useRoute } from 'vue-router'
import axios from 'axios';
import { ref } from 'vue'

let search = useRoute().params.search;
let data = ref({}) ;


let urlAPI = `https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=title,id,artist_title,image_id`; 


async function loadData() {
  await axios.get(urlAPI)
    .then((response) =>
      data.value = response.data.data
    )
}

loadData();

</script>


<template>

  <div class="wrapper">
    <div class="container">
      <div class="title-search">
        <h2>Search results for : {{ search }}</h2>    
      </div>
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
.title-search{
  margin: 30px 0 20px 0;
}
</style>

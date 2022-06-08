<template>
  <router-link :to="`/details-artwork/${id}`" class="container-artworks">
    <div class="artwork">
        <div class="holder">
            <slot name="image"></slot>
        </div>
        <h3 class="artwork-title">{{ title }}</h3>
        <h4 class="artwork-artist">{{ artist }}</h4>
    </div>
    </router-link>

    <RouterView />
</template>

<script setup>
import gsap from 'gsap'
import { onMounted } from 'vue'

defineProps({
    id : Number,
    title: String,
    artist: String
})

onMounted(() => {
  gsap.timeline()
  .fromTo(".container-artworks",{opacity: 0, y: "10%",},{duration: 1,delay: 2, opacity: 1, y: 0, ease: "power3.inOut", stagger: .2,})
});

</script>

<style lang="scss">
    .container-artworks{
        text-decoration: none;
    }
    .holder{
        overflow: hidden;
        width: 100%;
        padding-top: 3.5rem;
        padding-bottom: 3.5rem;
        padding-left: 3.5rem;
        padding-right: 3.5rem;
        height: 400px;
        background-color: var(--dynamic-holder-bg-color);
        margin-bottom: 1rem;

        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .list-artworks{
        display: grid;
        grid-auto-columns: 1fr;
        grid-column-gap: 3vw;
        grid-row-gap: 3vw;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto auto;
        margin-bottom: 50px;
    }
    @media only screen and (max-width: 768px) {
        .list-artworks{
            grid-template-columns: 1fr 1fr;
            grid-row-gap: 40px;
        }
    }
    @media only screen and (max-width: 500px) {
        .list-artworks{
            grid-template-columns: 1fr;
            grid-row-gap: 40px;
        }
    }

    .artwork{
        width: 100%;

        h3.artwork-title{
            font-family: "Neue Helvetica Bold";
        }

        h4.artwork-artist{
            font-family: "Neue Helvetica Regular";
            margin-top: 0.3rem;
        }
    }
</style>
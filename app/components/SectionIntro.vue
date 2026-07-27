<template>
  <section
    class="relative flex flex-col items-center justify-center w-full h-screen bg-cover px-8 py-14 bg-center text-intro-dark-gray-brown bg-intro-light-orange"
  >
    <div class="flex flex-col items-center justify-center h-full w-full bg-contain bg-no-repeat bg-center px-20 text-center max-w-sm" :style="{ backgroundImage: `url(${IntroBg})` }">
      <div class="flex flex-col items-center gap-10 leading-tight text-sm">
        <img :src="IntroLogo" alt="Logo da Intro" class="w-20" >
        <p>Estamos muito felizes em compartilhar este momento tão especial com você.</p>
        <p>Depois de tantos momentos vividos juntos, chegou a hora de celebrar o início de um novo capítulo das nossas vidas.</p>
        <p>Será uma alegria ter sua presença nesse dia tão importante.</p>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import IntroLogo from '~/assets/images/intro-logo.webp'
import IntroBg from '~/assets/images/intro-bg.webp'
</script>
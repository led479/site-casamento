<template>
  <section
    class="relative flex flex-col items-center justify-center w-full min-h-screen bg-cover bg-center px-4 text-hero-light-orange"
    :style="{ backgroundImage: `url(${MainBg})` }"
  >
    <div class="flex flex-col">
      <Logo class="w-80" />
      <h2 class="-translate-y-5">TE CONVIDAM PARA O SEU CASAMENTO</h2>
    </div>
    <p class="absolute bottom-10 font-heading text-xs">24 de outubro de 2026</p>
  </section>
</template>


<script setup lang="ts">
import Logo from '~/assets/logo.svg'
import MainBg from '~/assets/images/main-bg.png'
</script>
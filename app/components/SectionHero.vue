<template>
  <section
    class="relative flex flex-col items-center justify-center w-full min-h-[calc(100svh-1rem)] bg-cover bg-center px-4 text-hero-light-orange"
    :style="imageLoaded ? { backgroundImage: `url(${Pg1Fundo})` } : {}"
  >
    <Transition name="fade">
      <AppLoader v-if="!imageLoaded" />
    </Transition>

    <div class="flex items-center text-center flex-col px-4">
      <img :src="Pg1TextoEstilizado" alt="Giulia e Rolf" width="330" >
      <h1>TE CONVIDAM PARA O SEU CASAMENTO</h1>
    </div>
    <p class="absolute bottom-10 font-heading text-xs">24 de outubro de 2026</p>
  </section>
</template>

<script setup lang="ts">
import Pg1TextoEstilizado from '~/assets/new/pg1_texto_estilizado.webp'
import Pg1Fundo from '~/assets/new/pg1_fundo.webp'

useHead({
  link: [{ rel: 'preload', as: 'image', href: Pg1Fundo }],
})

const imageLoaded = ref(false)

onMounted(() => {
  const img = new Image()
  img.src = Pg1Fundo
  img.onload = () => {
    imageLoaded.value = true
  }
  img.onerror = () => {
    imageLoaded.value = true
  }
})
</script>

<style scoped>
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-leave-to {
  opacity: 0;
}
</style>

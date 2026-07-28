<template>
  <section
    class="relative flex flex-col items-center justify-center w-full min-h-[calc(100dvh-2.5rem)] bg-cover bg-center px-4 text-hero-light-orange"
    :style="imageLoaded ? { backgroundImage: `url(${MainBg})` } : {}"
  >
    <Transition name="fade">
      <AppLoader v-if="!imageLoaded" />
    </Transition>

    <div class="flex flex-col">
      <Logo class="w-80 h-20" />
      <h1>TE CONVIDAM PARA O SEU CASAMENTO</h1>
    </div>
    <p class="absolute bottom-10 font-heading text-xs">24 de outubro de 2026</p>
  </section>
</template>

<script setup lang="ts">
import Logo from '~/assets/logo.svg'
import MainBg from '~/assets/images/main-bg.webp'

useHead({
  link: [{ rel: 'preload', as: 'image', href: MainBg }],
})

const imageLoaded = ref(false)

onMounted(() => {
  const img = new Image()
  img.src = MainBg
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

<template>
  <section
    class="relative flex flex-col items-center justify-center w-full bg-cover bg-right px-8 py-14 text-informacoes-dark-gray-brown" :style="{ backgroundImage: `url(${InfoBg})` }"
  >
    <div class="flex flex-col items-center justify-center h-full w-full bg-contain bg-no-repeat bg-center pb-10 px-10 text-center max-w-sm min-h-[500px]" :style="{ backgroundImage: `url(${InfoSeda})` }">
      <div class="flex flex-col items-center gap-6 leading-tight text-sm">
        <div class="flex flex-col gap-4 items-center">
          <img :src="Flores" alt="Logo da Intro" class="w-10" >
          <InfoTitulo class="w-48 h-7" />
        </div>
        <div class="flex flex-col gap-3 px-8 max-w-[260px]">
          <p class="font-semibold text-nowrap">Alguns detalhes para o seu conforto:</p>
          <p>Traje: Social / Esporte fino</p>
          <p>Nossa celebração não foi preparada para receber crianças.<br> Agradecemos a compreensão e o carinho de todos.</p>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import InfoSeda from '~/assets/images/info-seda.webp'
import InfoBg from '~/assets/images/info-bg.webp'
import InfoTitulo from '~/assets/info-titulo.svg'
import Flores from '~/assets/images/flores.webp'
</script>
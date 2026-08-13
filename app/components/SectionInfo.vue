<template>
  <section
    class="relative min-h-[90svh] flex flex-col items-center justify-center w-full bg-cover bg-right px-8 py-14 text-p5-dark-gray" :style="{ backgroundImage: `url(${Pg5Fundo})` }"
  >
    <div class="flex flex-col items-center h-full w-full bg-contain bg-no-repeat bg-center pt-22 text-center max-w-sm min-h-[500px]" :style="{ backgroundImage: `url(${Pg5Seda})` }">
      <div class="flex flex-col items-center gap-6 leading-tight text-sm">
        <div class="flex flex-col gap-3 items-center">
          <img :src="Pg5Icone" alt="Flores" class="w-10" >
          <img :src="Pg5Titulo" alt="Informações Importantes" width="176" >
        </div>
        <div class="flex flex-col items-center gap-3 max-w-[200px] text-center">
          <p class="font-semibold text-nowrap">Alguns detalhes para o seu conforto:</p>
          <p class="opacity-75">Traje: Social / Esporte fino</p>
          <p class="max-w-[175px]">Nossa celebração não foi preparada para receber crianças.<br> Agradecemos a compreensão e o carinho de todos.</p>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import Pg5Seda from '~/assets/new/pg5_seda.webp'
import Pg5Fundo from '~/assets/new/pg5_fundo.webp'
import Pg5Titulo from '~/assets/new/pg5_titulo.webp'
import Pg5Icone from '~/assets/new/pg5_icone.webp'
</script>
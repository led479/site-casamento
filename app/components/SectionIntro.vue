<template>
  <section
    class="relative flex flex-col items-center justify-center w-full min-h-screen px-8 py-14 text-p2-dark-gray-brown bg-cover" :style="{ backgroundImage: `url(${Pg2Fundo})` }"
  >
    <div class="flex flex-col items-center px-20 text-center max-w-sm gap-14">
      <div class="flex flex-col items-center gap-10">
        <img :src="Pg2Selo" alt="Logo da Intro" class="w-26" >
        <div class="flex flex-col items-center gap-8 leading-tight opacity-75">
          <p>Estamos muito felizes em compartilhar este momento tão especial com você.</p>
          <p>Depois de tantos momentos vividos juntos, chegou a hora de celebrar o início de um novo capítulo das nossas vidas.</p>
          <p>Será uma alegria ter sua presença nesse dia tão importante.</p>
        </div>
      </div>
      <Pg2TextoEstilizado class="w-50 h-20" />
    </div>
  </section>
</template>


<script setup lang="ts">
import Pg2Fundo from '~/assets/new/pg2_fundo.webp'
import Pg2Selo from '~/assets/new/pg2_selo.webp'
import Pg2TextoEstilizado from '~/assets/new/pg2_texto_estilizado-cropped.svg'
</script>
<template>
  <section
    class="relative flex flex-col items-center justify-center w-full pt-10 pb-20 bg-cover bg-center text-p4-light-orange" :style="{ backgroundImage: `url(${Pg4Fundo})` }"
  >
    <img :src="Pg4IconeCanto" alt="Canto Estilizado" width="48" class="absolute left-3 top-5" >
    <img :src="Pg4IconeCanto" alt="Canto Estilizado" width="48" class="absolute right-3 top-5 rotate-y-180" >
    <img :src="Pg4IconeCanto" alt="Canto Estilizado" width="48" class="absolute left-3 bottom-5 rotate-180 rotate-y-180" >
    <img :src="Pg4IconeCanto" alt="Canto Estilizado" width="48" class="absolute right-3 bottom-5 rotate-180" >
    <div class="flex flex-col items-center gap-10">
      <div class="flex flex-col items-center gap-6">
        <img :src="Pg4Titulo" alt="Jantar e Recepção" width="150"  >
        <img :src="Pg4FotoRestaurante" alt="Foto Restaurante" width="320"  >
      </div>
      <div class="flex flex-col items-center text-center px-10 gap-7 opacity-75">
        <p class="uppercase font-semibold">Empório Capella Restaurante</p>
        <p class="font-extralight">Rodovia Admar Gonzaga, 3730 - Itacorubi, Florianópolis - SC, 88034-001</p>
        <p class="font-semibold">A partir das 18h</p>
        <p class="font-extralight">Estacionamento no local</p>
        <Button class="w-full max-w-[200px] bg-transparent py-6 border-p4-light-orange/20 border mt-8" variant="outline" size="lg" as="a" href="https://maps.app.goo.gl/pvoNjfL8Jj1yzneo9" target="_blank">VER NO MAPA</Button>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import Pg4Fundo from '~/assets/new/pg4_fundo.webp'
import Pg4Titulo from '~/assets/new/pg4_titulo.webp'
import Pg4FotoRestaurante from '~/assets/new/pg4_foto_restaurante.webp'
import Pg4IconeCanto from '~/assets/new/pg4_icone_canto.webp'
import { Button } from '~/components/ui/button';

</script>
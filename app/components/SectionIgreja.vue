<template>
  <section
    class="relative min-h-[90svh] flex flex-col items-center justify-center w-full bg-cover bg-center pt-10 pb-20 text-p3-dark-gray" :style="{ backgroundImage: `url(${Pg3Fundo})` }"
  >
    <img :src="Pg3IconeCanto" alt="Canto Estilizado" width="48" class="absolute left-3 top-5 rotate-y-180" >
    <img :src="Pg3IconeCanto" alt="Canto Estilizado" width="48" class="absolute right-3 top-5" >
    <img :src="Pg3IconeCanto" alt="Canto Estilizado" width="48" class="absolute left-3 bottom-5 rotate-180" >
    <img :src="Pg3IconeCanto" alt="Canto Estilizado" width="48" class="absolute right-3 bottom-5 rotate-180 rotate-y-180" >
    <div class="flex flex-col items-center gap-10">
      <div class="flex flex-col items-center gap-6">
        <img :src="Pg3Titulo" alt="Cerimônia Religiosa" width="150"  >
        <img :src="Pg3FotoIgreja" alt="Foto Igreja" width="320"  >
      </div>
      <div class="flex flex-col items-center text-center px-10 gap-7 opacity-75">
        <p class="uppercase font-semibold">Igreja Puríssimo Coração de Maria</p>
        <p class="font-extralight">Rua Arlíndo Pena, 85 - Santa Mônica, Florianópolis - SC, 88037-260</p>
        <p class="font-semibold">24 de outubro de 2026, às 16h</p>
        <p class="font-extralight">Estacionamento no local</p>
        <Button class="w-full max-w-[200px] bg-transparent py-6 border-p3-dark-gray/20 border mt-8" variant="outline" size="lg" as="a" href="https://maps.app.goo.gl/kt8KHErgMXE6MCUC9" target="_blank">VER NO MAPA</Button>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import Pg3Fundo from '~/assets/new/pg3_fundo.webp'
import Pg3Titulo from '~/assets/new/pg3_titulo.webp'
import Pg3FotoIgreja from '~/assets/new/pg3_foto_igreja.webp'
import Pg3IconeCanto from '~/assets/new/pg3_icone_canto.webp'
import { Button } from '~/components/ui/button';

</script>
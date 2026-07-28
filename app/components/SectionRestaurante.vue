<template>
  <section
    class="relative flex flex-col items-center justify-center w-full py-10 text-restaurante-light-orange bg-restaurante-gray-brown"
  >
    <div class="flex flex-col items-center gap-10">
      <div class="flex flex-col items-center gap-4">
        <RestauranteTitulo class="w-80 h-16" />
        <img :src="RestauranteDesenho" alt="Desenho do Restaurante" class="max-w-[400px] w-full" >
      </div>
      <div class="flex flex-col items-center text-center px-10 gap-5 leading-tight">
        <p class="font-heading font-semibold">Empório Capella Restaurante</p>
        <p>Rodovia Admar Gonzaga, 3730 - Itacorubi, Florianópolis - SC, 88034-001</p>
        <p class="font-heading font-semibold">A partir das 18h</p>
        <p>Estacionamento no local</p>
        <Button class="w-full bg-restaurante-gray-brown py-6 border-restaurante-light-orange mt-2" variant="outline" size="lg" as="a" href="https://maps.app.goo.gl/pvoNjfL8Jj1yzneo9" target="_blank">VER NO MAPA</Button>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import RestauranteTitulo from '~/assets/restaurante-titulo.svg'
import RestauranteDesenho from '~/assets/images/restaurante-desenho.webp'
import { Button } from '~/components/ui/button';

</script>
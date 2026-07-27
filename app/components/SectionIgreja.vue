<template>
  <section
    class="relative flex flex-col items-center justify-center w-full py-10 text-igreja-dark-gray bg-igreja-light-orange"
  >
    <div class="flex flex-col items-center gap-10">
      <div class="flex flex-col items-center gap-4">
        <IgrejaTitulo class="w-80 h-16" />
        <img :src="IgrejaDesenho" alt="Desenho da Igreja" class="max-w-[400px]" >
      </div>
      <div class="flex flex-col items-center text-center px-10 gap-5 leading-tight">
        <p class="font-heading font-semibold">Igreja Puríssimo Coração de Maria</p>
        <p>Rua Arlíndo Pena, 85 - Santa Mônica, Florianópolis - SC, 88037-260</p>
        <p class="font-heading font-semibold">24 de outubro de 2026, às 16h</p>
        <p>Estacionamento no local</p>
        <Button class="w-full bg-igreja-light-orange py-6 border-igreja-dark-gray mt-2" variant="outline" size="lg" as="a" href="https://maps.app.goo.gl/kt8KHErgMXE6MCUC9" target="_blank">VER NO MAPA</Button>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import IgrejaTitulo from '~/assets/igreja-titulo.svg'
import IgrejaDesenho from '~/assets/images/igreja-desenho.webp'
import { Button } from '~/components/ui/button';

</script>
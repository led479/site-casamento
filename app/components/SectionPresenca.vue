<template>
  <section
    class="relative flex flex-col items-center justify-center w-full bg-cover bg-center px-8 py-14 text-p7-light-yellow" :style="{ backgroundImage: `url(${Pg7Fundo})` }"
  >
    <div class="flex flex-col items-center h-full w-full bg-contain bg-no-repeat bg-center pt-46 text-center max-w-sm min-h-[650px]" :style="{ backgroundImage: `url(${Pg7Seda})` }">
      <div class="flex flex-col items-center gap-12 leading-tight text-sm">
        <p class="uppercase">Confirmação<br>de</p>
        <div class="flex flex-col gap-2 items-center">
          <img :src="Pg7Titulo" alt="Sobre Presentes" width="120" >
        </div>
        <div class="flex flex-col items-center gap-5 max-w-[200px] font-light">
          <p>Sua presença é muito importante<br> para nós!</p>
          <p class="max-w-[150px]">Por favor, confirme até 05/09/2026 através do botão abaixo.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Pg7Seda from '~/assets/new/pg7_seda.webp'
import Pg7Fundo from '~/assets/new/pg7_fundo_exp.webp'
import Pg7Titulo from '~/assets/new/pg7_titulo.webp'
</script>
